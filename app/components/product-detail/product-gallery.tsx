import { useState } from 'react';
import Image from 'next/image';
import { getAWSImageUrl } from '@/utils/common.utils';
import LeftArrowIcon from '@/components/svg-icons/arrow-left/LeftArrowIcon';

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
        {images.length > 1 && (
          < button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-10"
            onClick={handlePrev}
          >
            <LeftArrowIcon />
          </button>
        )}
        <div className="image-item">
          {images.length > 0 && (
            <Image
              loading="lazy"
              src={getAWSImageUrl(images[currentIndex])}
              width={416}
              height={625}
              alt="product"
              className="object-contain transition-opacity duration-500 ease-in-out opacity-100 animate-fade"
            />
          )}
        </div>
        {images.length > 1 && (
          <button
            className="rightBtn btn btn-light position-absolute top-50 end-0 translate-middle-y z-10"
            onClick={handleNext}
          >
            <LeftArrowIcon />
          </button>
        )}
      </div>
    </>
  );
};

export default ProductImageGallery;
