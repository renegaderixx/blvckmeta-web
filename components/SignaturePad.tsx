'use client';

import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import type ReactSignatureCanvasClass from 'react-signature-canvas';

export interface SignatureData {
  dataUrl: string | null;
  typedName: string;
}

export interface SignaturePadRef {
  getSignatureData: () => SignatureData;
  clear: () => void;
}

interface SignaturePadProps {
  label?: string;
  id?: string;
  required?: boolean;
  error?: string;
}

const SignaturePad = forwardRef<SignaturePadRef, SignaturePadProps>(
  function SignaturePad(
    { label = 'Signature', id = 'signature-pad', required = false, error },
    ref
  ) {
    // Lazy-load the canvas component client-side to avoid SSR issues with canvas APIs
    const [SignatureCanvas, setSignatureCanvas] = useState<typeof ReactSignatureCanvasClass | null>(null);
    const canvasRef = useRef<ReactSignatureCanvasClass | null>(null);
    const [typedName, setTypedName] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
      import('react-signature-canvas').then((mod) => {
        setSignatureCanvas(() => mod.default);
      });
    }, []);

    useImperativeHandle(ref, () => ({
      getSignatureData(): SignatureData {
        let dataUrl: string | null = null;
        if (canvasRef.current && !canvasRef.current.isEmpty()) {
          dataUrl = canvasRef.current.getTrimmedCanvas().toDataURL('image/png');
        }
        return { dataUrl, typedName };
      },
      clear() {
        if (canvasRef.current) {
          canvasRef.current.clear();
          setIsEmpty(true);
        }
        setTypedName('');
      },
    }));

    const handleClear = () => {
      if (canvasRef.current) {
        canvasRef.current.clear();
        setIsEmpty(true);
      }
    };

    const handleEnd = () => {
      if (canvasRef.current) {
        setIsEmpty(canvasRef.current.isEmpty());
      }
    };

    const typedInputId = `${id}-typed`;
    const errorId = `${id}-error`;
    const descId = `${id}-desc`;

    return (
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-white">
          {label}
          {required && (
            <span className="ml-1 text-accent" aria-label="required">
              *
            </span>
          )}
        </legend>

        {/* Draw area */}
        <div>
          <p id={descId} className="mb-2 text-xs text-muted">
            Draw your signature in the box below using your mouse or finger.
          </p>
          <div
            className={`overflow-hidden rounded-lg border ${
              error ? 'border-error' : 'border-divider'
            } bg-white`}
            aria-describedby={descId}
          >
            {SignatureCanvas ? (
              <SignatureCanvas
                ref={canvasRef}
                penColor="#000000"
                backgroundColor="#ffffff"
                canvasProps={{
                  className: 'w-full',
                  style: { width: '100%', height: '140px', display: 'block' },
                  'aria-label': 'Signature drawing area',
                  role: 'img',
                }}
                onEnd={handleEnd}
              />
            ) : (
              <div className="flex h-36 items-center justify-center bg-white text-sm text-gray-400">
                Loading signature pad…
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="focus-ring rounded border border-divider px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
              aria-label="Clear drawn signature"
            >
              Clear
            </button>
            {!isEmpty && (
              <span className="text-xs text-success" role="status" aria-live="polite">
                Signature captured
              </span>
            )}
          </div>
        </div>

        {/* Text fallback — always visible for accessibility */}
        <div>
          <label htmlFor={typedInputId} className="mb-1 block text-sm text-white/80">
            Or type your full name as your signature
          </label>
          <p id={`${typedInputId}-desc`} className="mb-2 text-xs text-muted">
            Typing your full name constitutes a legally binding electronic signature.
          </p>
          <input
            id={typedInputId}
            type="text"
            value={typedName}
            onChange={(e) => setTypedName(e.target.value)}
            className={`form-field ${error ? 'error' : ''}`}
            placeholder="Full legal name"
            aria-describedby={`${typedInputId}-desc${error ? ` ${errorId}` : ''}`}
            aria-required={required}
            aria-invalid={!!error}
            autoComplete="name"
          />
        </div>

        {error && (
          <span id={errorId} role="alert" className="block text-xs text-error">
            {error}
          </span>
        )}
      </fieldset>
    );
  }
);

export default SignaturePad;
