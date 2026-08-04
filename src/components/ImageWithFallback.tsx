import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}

export function ImageWithFallback({ src, fallbackSrc, alt, className, ...props }: ImageWithFallbackProps) {
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  // If the src changes, reset state
  useEffect(() => {
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    setHasFailed(true);
  };

  if (hasFailed) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[var(--surface)] text-[var(--gold)] p-4 border border-[var(--border)] text-center select-none ${className || ''}`}>
        <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-2">
          <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <span className="text-xs font-semibold tracking-wider font-serif uppercase text-[var(--gold)]">{alt || 'Swadam Foods'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
      {...props}
    />
  );
}
