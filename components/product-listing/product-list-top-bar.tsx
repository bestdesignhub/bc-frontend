import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { setView } from '@/lib/redux/slices/commonSlice';
import { Form } from 'react-bootstrap';
const ProductListTopBar = () => {
  const view = useAppSelector((state) => state?.common?.view);
  const dispatch = useAppDispatch();
  return (
    <div className="product-topbar">
      <div className="d-flex flex-wrap">
        <div className="prodict-views d-flex">
          <div className="view-item">
            <button
              onClick={() => dispatch(setView('list'))}
              className={view === 'list' ? 'active' : ''}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7.64706" height="7.64706" fill="#868686" />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(0 9.17651)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(0 18.3529)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(9.17676)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(9.17676 9.17651)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(9.17676 18.3529)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(18.3525)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(18.3525 9.17651)"
                  fill="#868686"
                />
                <rect
                  width="7.64706"
                  height="7.64706"
                  transform="translate(18.3525 18.3529)"
                  fill="#868686"
                />
              </svg>
            </button>
          </div>
          <div className="view-item">
            <button
              onClick={() => dispatch(setView('grid'))}
              className={view === 'grid' ? 'active' : ''}
            >
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="5.77778" height="5.77778" transform="translate(0.5)" fill="#868686" />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(0.5 6.74072)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(0.5 13.4814)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(0.5 20.2222)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(7.24121)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(7.24121 6.74072)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(7.24121 13.4814)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(7.24121 20.2222)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(13.9814)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(13.9814 6.74072)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(13.9814 13.4814)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(13.9814 20.2222)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(20.7227)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(20.7227 6.74072)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(20.7227 13.4814)"
                  fill="#868686"
                />
                <rect
                  width="5.77778"
                  height="5.77778"
                  transform="translate(20.7227 20.2222)"
                  fill="#868686"
                />
              </svg>
            </button>
          </div>
          <div className="view-item">
            <p>150 Product</p>
          </div>
        </div>
        <div className="product-search d-flex">
          <Form.Group controlId="searchForm.ControlInput">
            <Form.Control type="search" placeholder="Search Here..." />
          </Form.Group>
          <Form.Group controlId="searchForm.ControlInput">
            <Form.Select aria-label="Default select example">
              <option>Ascending price</option>
              <option value="1">Ascending price</option>
              <option value="2">Decending price</option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default ProductListTopBar;
