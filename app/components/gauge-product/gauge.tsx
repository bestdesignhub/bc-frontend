'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Row, Col, Form } from 'react-bootstrap';
import '@/app/styles/gauge-product.css';
import GaugeBanner from './gauge-banner';
import GaugeData from './gauge-data';
import GaugeNavigate from './gauge-navigate';
import StepBreadcrumb from './step-breadcrumb';

export default function Gauge() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelection = (id: any) => {
    setSelectedProduct(id);
  };
  return (
    <>
      <GaugeBanner />
      <GaugeNavigate />
      <div className="gauge-wrapper">
        <div className="gauge-row">
          <Row>
            {GaugeData.map((gauge) => (
              <Col xs={12} md={6} lg={4} key={gauge.id}>
                <div className={`gaugebox ${selectedProduct === gauge.id ? 'selected' : ''}`}>
                  <Form.Check
                    inline
                    type={'radio'}
                    name={'product'}
                    id={`pr-${gauge.id}`}
                    checked={selectedProduct === gauge.id}
                    onChange={() => handleSelection(gauge.id)}
                  />
                  <div className="image">
                    <Image src={gauge.image} width={550} height={336} alt="product" />
                  </div>
                  <div className="info">
                    <h4>{gauge.name}</h4>
                    <p>{gauge.text}</p>
                  </div>
                  <button>{gauge.buttonText}</button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <StepBreadcrumb />
    </>
  );
}
