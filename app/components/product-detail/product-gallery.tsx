import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import { getAWSImageUrl } from '@/utils/common.utils';

const ProductImageGallery = ({ details }: { details?: { images?: string[] } }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!selectedImage || !details?.images) return;
    const currentIndex = details.images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % details.images.length;
    setSelectedImage(details.images[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage || !details?.images) return;
    const currentIndex = details.images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + details.images.length) % details.images.length;
    setSelectedImage(details.images[prevIndex]);
  };

  return (
    <>
      <div className="product-image-row d-flex flex-wrap">
        {details?.images?.map((image: string) => (
          <div
            className="image-item"
            key={image}
            onClick={() => handleOpen(image)}
            style={{ cursor: 'pointer' }}
          >
            <div className="image">
              <Image
                loading="lazy"
                src={getAWSImageUrl(image)}
                width={370}
                height={520}
                alt="product"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Body className="d-flex align-items-center justify-content-center position-relative">
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
            onClick={handlePrev}
          >
            ◀
          </button>

          {selectedImage && (
            <Image
              loading="lazy"
              src={getAWSImageUrl(selectedImage)}
              width={800}
              height={1000}
              alt="product"
            />
          )}

          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
            onClick={handleNext}
          >
            ▶
          </button>

          <button className="btn btn-light position-absolute top-0 end-0 m-3" onClick={handleClose}>
            ✖
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductImageGallery;
