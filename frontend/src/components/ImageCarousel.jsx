import { useEffect, useState } from 'react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [images]);

  const currentImage = images[currentIndex];

  return (
    <div className="carousel" aria-label="Company highlights carousel">
      <img src={currentImage.src} alt={currentImage.alt} className="carousel-image" />
      <div className="carousel-dots" aria-label="Carousel navigation indicators">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === currentIndex ? 'dot active' : 'dot'}
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
