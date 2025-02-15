'use client';

import { useView } from '@/hooks';
import React, { FC } from 'react';
import { GridIcon, ListIcon } from '@/components/svg-icons';
import { DebounceSearch, SortSelect } from '../../common';

const ProductTopbar: FC<{ total: number; text: string }> = ({ total = 0, text = 'Product' }) => {
  const { view, setView } = useView();
  return (
    <div className="product-topbar">
      <div className="d-flex flex-wrap">
        <div className="prodict-views d-flex">
          <div className="view-item">
            <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
              <ListIcon />
            </button>
          </div>
          <div className="view-item">
            <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
              <GridIcon />
            </button>
          </div>
          <div className="view-item">
            <p>
              {total} {text}
            </p>
          </div>
        </div>
        <div className="product-search d-flex">
          <DebounceSearch />
          <SortSelect
            options={[
              { label: 'Ascending Price', value: 'price-asc' },
              { label: 'Descending Price', value: 'price-desc' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTopbar;
