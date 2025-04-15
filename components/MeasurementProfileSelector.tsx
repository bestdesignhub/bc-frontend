'use client';

import React, { useState } from 'react';

const MeasurementProfileSelector = ({
  profiles,
}: {
  profiles: { value: string; label: string }[];
}) => {
  const [selectedProfile, setSelectedProfile] = useState('');

  console.log('profiles', profiles);

  return (
    <div>
      <h5>Select a Measurement Profile:</h5>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {profiles.map((profile) => (
          <li key={profile.value}>
            <button
              onClick={() => setSelectedProfile(profile.label)}
              style={{
                margin: '5px 0',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#f8f8f8',
                cursor: 'pointer',
              }}
            >
              {profile.label}
            </button>
          </li>
        ))}
      </ul>

      {selectedProfile && (
        <p>
          <strong>Selected Measurement Profile:</strong> {selectedProfile}
        </p>
      )}
    </div>
  );
};

export default MeasurementProfileSelector;
