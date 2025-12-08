'use client';
import React, { FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useView } from '@/hooks';
import ProductCard from './product-card';

type ProductListingProps = {
  list?: any[];
  genderSlug: string;
  price?: any;
};

const ProductListing: FC<ProductListingProps> = ({ list = [], genderSlug, price }) => {
  const { view } = useView();

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // you can change per-page items

  // Calculate items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  // Pagination Handlers
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page: number) => setCurrentPage(page);

  return (
    <>
      <Row className={`product-container g-4 ${view}`}>
        {currentItems.map((product) => (
          <ProductCard
            key={product?._id}
            product={product}
            genderSlug={genderSlug}
            price={price}
          />
        ))}
      </Row>

      {/* Pagination UI */}
      <div className="pagination mt-4 pb-4 d-flex justify-content-center gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn btn-outline-dark"
        >
          Previous
        </button>

        {/* Numbered Pagination */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`btn ${currentPage === i + 1 ? 'btn-dark' : 'btn-outline-dark'}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="btn btn-outline-dark"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductListing;
