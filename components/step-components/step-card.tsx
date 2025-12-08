'use client';

import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Col, Form } from 'react-bootstrap';

const StepCard: FC<{
  onChange: (id: string) => void;
  stepData: any;
  nextSlugId: string | null;
  price: number;
  filterKeyword?: string;   // comma separated keywords
  allItems?: any[];         // full list
}> = ({ onChange, stepData, nextSlugId, price, filterKeyword, allItems }) => {

  const [isHovered, setIsHovered] = useState(false);

  // Convert filterKeyword → array
  const keywords = filterKeyword
    ? filterKeyword.toLowerCase().split(',').map(k => k.trim())
    : [];

  // const title = stepData?.title?.toLowerCase();

  // Check if current card title matches ANY keyword
  // const isMatch = keywords.some((kw) => title.includes(kw));

  // Find FIRST matched item from full list
  const firstMatch =
    allItems && keywords.length
      ? allItems.find((item) =>
        keywords.some((kw) =>
          item.title?.toLowerCase().includes(kw)
        )
      )
      : null;

  // ONLY show the card if it is the FIRST match
  if (keywords.length && firstMatch?._id !== stepData._id) {
    return null;
  }

  return (
    <Col xs={12} md={6} lg={4}>
      <div
        className="gaugebox"
        style={
          nextSlugId === stepData?._id
            ? { border: '1px solid #7f7263' }
            : {}
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Form.Check
          inline
          type="radio"
          name="product"
          id={`pr-${stepData?._id}`}
          onChange={() => onChange(stepData?._id)}
          checked={nextSlugId === stepData?._id}
        />

        <div className="image">
          <Image
            src={getAWSImageUrl(
              isHovered ? stepData.realImage : stepData.graphImage
            )}
            width={550}
            height={336}
            alt="product"
            loading="lazy"
          />
        </div>

        <div className="info">
          <h4>{stepData.title}</h4>
          <p>{stepData.description}</p>

          {stepData?.type === 'Style' && (
            <span className="price">€ {stepData.price || price}</span>
          )}
        </div>

        <button>Select</button>
      </div>
    </Col>
  );
};

export default StepCard;
