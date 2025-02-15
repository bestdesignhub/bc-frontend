'use client';

import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { useRouter, useSearchParams } from 'next/navigation';
import Pagination from 'react-bootstrap/Pagination';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
};

const CustomPagination: React.FC<PaginationProps> = ({ currentPage, totalPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPage) return;
    dispatch(setIsPageSwitchLoading(true));
    const params = new URLSearchParams(searchParams.toString());
    params.set('_page', page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination className="mt-4">
        <Pagination.Prev
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
        />
        {[...Array(totalPage)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currentPage >= totalPage}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
