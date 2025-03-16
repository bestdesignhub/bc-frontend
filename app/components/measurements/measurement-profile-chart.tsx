import { URL_SLUG, USER_ROUTES } from '@/constants';
import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

export default function MeasurementProfileChart({
  show,
  handleClose,
  profiles,
}: {
  show: boolean;
  handleClose: () => void;
  profiles: any[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const measurementProfile = searchParams.get(URL_SLUG.MEASUREMENT_PROFILE);
  const query = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(URL_SLUG.MEASUREMENT_PROFILE)) {
      params.delete(URL_SLUG.MEASUREMENT_PROFILE);
    }
    return params.toString();
  }, [searchParams]);

  const handleSizeSelection = (sizeId: string) => {
    dispatch(setIsPageSwitchLoading(true));
    handleClose();
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(URL_SLUG.MEASUREMENT_PROFILE)) {
      params.set(URL_SLUG.MEASUREMENT_PROFILE, sizeId);
    } else {
      params.append(URL_SLUG.MEASUREMENT_PROFILE, sizeId);
    }

    router.push(`${USER_ROUTES.measurements}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="size-modal">
        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="cm"> */}
        <Modal.Header>
          <Modal.Title>Select your measurement profile</Modal.Title>
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
            {profiles.map((size) => (
              <div
                key={size.value}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <Form.Check
                  inline
                  key={size.value}
                  label={size.label}
                  style={{ width: 'fit-content' }}
                  name="size"
                  type="radio"
                  id={size.value}
                  checked={measurementProfile === size.value}
                  onClick={() => handleSizeSelection(size.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
                  <div>
                    <Link
                      href={`${USER_ROUTES.measurementProfile}?${query}&${URL_SLUG.MEASUREMENT_PROFILE}=${size.value}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        height={24}
                        width={24}
                        viewBox="0 0 512 505.97"
                      >
                        <path d="M307.49 321.86L177.68 348.3l18.78-138.12 111.03 111.68zM80.99 3.91H281.1l-71.54 78.26H84.49c-3.55 0-6.23 2.68-6.23 6.24v339.3h339.3c3.35 0 6.23-2.88 6.23-6.24V317.04l78.26-78.08v182.51c0 44.62-39.87 84.5-84.49 84.5H46.7c-25.67 0-46.7-24.6-46.7-50.2V88.41c0-44.43 36.57-84.5 80.99-84.5zM237.43 168.4L394.75 4.01c4.74-3.94 9.48-5.46 14.95-2.33l99.15 96.01c3.93 4.74 4.73 10.21-.81 15.75L348.39 280.16 237.43 168.4z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
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
