import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
  alt?: string;
  className?: string;
}

export function ImageWithFallback({ src, fallbackSrc, alt, className, ...props }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  // If the src changes, reset state
  useEffect(() => {
    setCurrentSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
      {...props}
    />
  );
}
