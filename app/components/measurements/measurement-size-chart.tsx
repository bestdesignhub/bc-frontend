import { URL_SLUG, USER_ROUTES } from '@/constants';
import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

export default function MeasurementSizeChart({
  show,
  handleClose,
  sizes,
}: {
  show: boolean;
  handleClose: () => void;
  sizes: any[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fittingSize = searchParams.get(URL_SLUG.FITTING_SIZE) ?? sizes?.at(0)?._id;

  const handleSizeSelection = (sizeId: string) => {
    dispatch(setIsPageSwitchLoading(true));
    handleClose();
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(URL_SLUG.FITTING_SIZE)) {
      params.set(URL_SLUG.FITTING_SIZE, sizeId);
    } else {
      params.append(URL_SLUG.FITTING_SIZE, sizeId);
    }

    router.push(`${USER_ROUTES.measurements}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="size-modal">
        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="cm"> */}
        <Modal.Header>
          <Modal.Title>Select size</Modal.Title>
          {/* <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link eventKey="cm">CM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="inches">INCHES</Nav.Link>
              </Nav.Item>
            </Nav> */}
          <Button variant="secondary" className="close" onClick={handleClose}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0508 12.0502L21.9503 21.9497"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0508 21.9498L21.9503 12.0503"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Modal.Header>
        <Modal.Body>
          {/* <Tab.Content>
              <Tab.Pane eventKey="inches"> */}
          <InputGroup className="size-radiobuttons d-flex flex-wrap">
            {sizes.map((size) => (
              <Form.Check
                inline
                key={size._id}
                label={size.name}
                name="size"
                type="radio"
                id={size._id}
                checked={fittingSize === size._id}
                onClick={() => handleSizeSelection(size._id)}
              />
            ))}
          </InputGroup>
          {/* </Tab.Pane>
              <Tab.Pane eventKey="cm"> */}
          {/* </Tab.Pane>
            </Tab.Content> */}
        </Modal.Body>
        {/* </Tab.Container> */}
      </Modal>
    </>
  );
}
