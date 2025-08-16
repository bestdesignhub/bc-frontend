import { useState } from 'react';
import Image from 'next/image';
import { getAWSImageUrl } from '@/utils/common.utils';

const ProductImageGallery = ({ details }: { details?: { images?: string[] } }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = details?.images || [];

  const handleNext = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="productGalleryWrapper position-relative text-center">
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-10"
          onClick={handlePrev}
        >
          ◀
        </button>
        <div className="image-item">
          {images.length > 0 && (
            <Image
              loading="lazy"
              src={getAWSImageUrl(images[currentIndex])}
              width={800}
              height={550}
              alt="product"
            />
          )}
        </div>
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-10"
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
    </>
  );
};

export default ProductImageGallery;
