'use client';

import Link from 'next/link';
import React, { FC, useState } from 'react';
import MeasurementProfileChart from './measurement-profile-chart';

const SelectYourMeasurementProfile: FC<{ measurementProfiles: any[] }> = ({
  measurementProfiles,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="add-btn" style={{ marginTop: '10px' }}>
        <Link href="#" onClick={handleShow}>
          Select your measurement profile
        </Link>
      </div>
      {show && (
        <MeasurementProfileChart
          handleClose={handleClose}
          show={show}
          profiles={measurementProfiles}
        />
      )}
    </>
  );
};

export default SelectYourMeasurementProfile;
