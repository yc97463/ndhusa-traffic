import React, { useState } from 'react';

type AsyncImageProps = {
  src: string;
  alt: string;
  placeholderSrc: string;
  className?: string;
};

const AsyncImage: React.FC<AsyncImageProps> = ({ src, alt, placeholderSrc, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={className}>
      {!isLoaded && <img src={placeholderSrc} alt={alt} className="placeholder" />}
      <img src={src} alt={alt} onLoad={handleImageLoad} className={`main-image ${isLoaded ? 'loaded' : 'loading'}`} />
      <style jsx>{`
        .main-image.loading {
          display: none;
        }
        .main-image.loaded {
          display: block;
        }
        .placeholder {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default AsyncImage;
