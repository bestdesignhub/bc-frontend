'use client';

import { DropDownOptionType } from '@/types';
import React, { FC, useEffect, useState } from 'react';
import { Accordion, Form, InputGroup } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { getCurrentStepDetails, getStepTypesList } from '@/utils/server-api.utils';

interface Props {
  steps?: any;
  step?: any;
}

const FILTERS = [
  { key: '_gender', label: 'Gender', field: 'genders' },
  { key: '_colour', label: 'Colour', field: 'colours' },
  { key: '_material', label: 'Material', field: 'materials' },
];

const YarnListingSidebar: FC<Props> = async ({ steps, step }: any) => {
  const [activeTab, setActiveTab] = useState(Number(step));
  //  Here we have to edit the name of tab just add image and label
  const tabs = [
    { id: 1, label: 'Tab 1', content: 'This is the content of Tab 1' },
    { id: 2, label: 'Tab 2', content: 'This is the content of Tab 2' },
    { id: 3, label: 'Tab 3', content: 'This is the content of Tab 3' },
    { id: 4, label: 'Tab 4', content: 'This is the content of Tab 4' },
    { id: 5, label: 'Tab 5', content: 'This is the content of Tab 5' },
  ];

  return (
    <div className="sidebar">
      {/* <Accordion defaultActiveKey="0">
        {FILTERS.map(({ key, label, field }, index) => (
          <Accordion.Item eventKey={String(index)} key={key}>
            <Accordion.Header>{label}</Accordion.Header>
            <Accordion.Body>
              <InputGroup className="gender-checkbox">
                {optionsMap[field].map((option) => (
                  <Form.Check
                    inline
                    key={option.value}
                    label={option.label}
                    name={key}
                    type="checkbox" // Using checkbox for toggling behavior
                    id={option.value}
                    checked={searchParams.get(key) === option.value} // Check if this option is selected
                    onChange={() => updateParams(key, option.value)} // Toggle the selection
                  />
                ))}
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion> */}
      <div style={{ padding: '20px', background: '#f4f4f4', borderRight: '1px solid #ddd' }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: activeTab === tab.id ? '#ddd' : 'transparent',
              marginBottom: '10px',
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YarnListingSidebar;
