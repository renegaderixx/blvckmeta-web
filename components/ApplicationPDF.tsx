'use client';

export interface PDFField {
  label: string;
  value: string;
}

export interface PDFSection {
  title: string;
  fields: PDFField[];
}

export interface ApplicationPDFData {
  sections: PDFSection[];
  signatureDataUrl: string | null;
  typedSignature: string;
}

export async function generatePDF(
  data: ApplicationPDFData,
  track: string
): Promise<Blob> {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // ── Header ──
  // Orange accent bar
  doc.setFillColor(255, 140, 0);
  doc.rect(0, 0, pageWidth, 14, 'F');

  // Title text
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('BLVCKMETA', margin, 9.5);

  y = 22;

  // Application track
  doc.setTextColor(255, 140, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Official Application — ${track}`, margin, y);
  y += 8;

  // Date
  doc.setTextColor(136, 136, 136);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.text(`Submitted: ${dateStr}`, margin, y);
  y += 6;

  // Orange divider
  doc.setDrawColor(255, 140, 0);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  // ── Sections ──
  for (const section of data.sections) {
    // Check if we need a new page
    if (y > pageHeight - 50) {
      doc.addPage();
      y = margin;
    }

    // Section heading background
    doc.setFillColor(17, 17, 17);
    doc.roundedRect(margin, y - 4, contentWidth, 10, 2, 2, 'F');

    doc.setTextColor(255, 140, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(section.title.toUpperCase(), margin + 4, y + 3);
    y += 12;

    for (const field of section.fields) {
      if (y > pageHeight - 30) {
        doc.addPage();
        y = margin;
      }

      // Label
      doc.setTextColor(136, 136, 136);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text(field.label, margin + 4, y);
      y += 5;

      // Value
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');

      // Handle long text with wrapping
      const lines = doc.splitTextToSize(field.value || '—', contentWidth - 8);

      // Background for value
      const lineHeight = 5;
      const blockHeight = lines.length * lineHeight + 4;

      doc.setFillColor(13, 13, 13);
      doc.roundedRect(margin + 2, y - 2, contentWidth - 4, blockHeight, 1, 1, 'F');

      doc.setTextColor(220, 220, 220);
      doc.text(lines, margin + 6, y + 2);
      y += blockHeight + 4;
    }

    y += 4;
  }

  // ── Signature ──
  if (y > pageHeight - 70) {
    doc.addPage();
    y = margin;
  }

  // Signature section heading
  doc.setFillColor(17, 17, 17);
  doc.roundedRect(margin, y - 4, contentWidth, 10, 2, 2, 'F');
  doc.setTextColor(255, 140, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('SIGNATURE', margin + 4, y + 3);
  y += 14;

  if (data.signatureDataUrl) {
    try {
      doc.addImage(data.signatureDataUrl, 'PNG', margin, y, 80, 30);
      y += 36;
    } catch {
      // Fallback if image fails
      doc.setTextColor(136, 136, 136);
      doc.setFontSize(8);
      doc.text('[Signature image unavailable]', margin + 4, y + 8);
      y += 16;
    }
  }

  if (data.typedSignature) {
    doc.setTextColor(136, 136, 136);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(`Typed signature: ${data.typedSignature}`, margin, y);
    y += 8;
  }

  // Signature line
  doc.setDrawColor(26, 26, 26);
  doc.setLineWidth(0.3);
  doc.line(margin, y, margin + 100, y);
  doc.setTextColor(136, 136, 136);
  doc.setFontSize(7);
  doc.text('Applicant Signature', margin, y + 4);
  y += 12;

  // ── Footer on every page ──
  const totalPages = (doc.internal as unknown as { getNumberOfPages: () => number }).getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(13, 13, 13);
    doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');
    doc.setDrawColor(255, 140, 0);
    doc.setLineWidth(0.3);
    doc.line(0, pageHeight - 14, pageWidth, pageHeight - 14);
    doc.setTextColor(136, 136, 136);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text(
      '© 2026 BlvckMeta by Rixx City Studios — Confidential',
      margin,
      pageHeight - 6
    );
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 6, {
      align: 'right',
    });
  }

  return doc.output('blob');
}
