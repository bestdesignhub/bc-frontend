import Image from 'next/image';
import Link from 'next/link';
export default function GaugeNavigate() {
  return (
    <>
      <div className="gauge-navigate">
        <div className="d-flex flex-wrap">
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="image">
                <Image src="/images/gauge-img.png" width={300} height={200} alt="gauge" priority />
              </div>
              <div className="info">
                <div className="title">
                  <h6>Cotton poplin</h6>
                  <p>
                    Pattern: <strong>Striped</strong>
                  </p>
                  <p>
                    Colour: <strong>Red</strong>
                  </p>
                </div>
                <div className="price">
                  Rs. <strong>8078</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="image">
                <Image src="/images/gauge-img.png" width={300} height={200} alt="gauge" priority />
              </div>
              <div className="info">
                <div className="title">
                  <h6>Cotton poplin</h6>
                  <button>
                    <Link href={'/'}>
                      Change
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="#868686"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="d-none only-title">Style</div>
            </div>
          </div>
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="image d-none">
                <Image src="/images/gauge-img.png" width={300} height={200} alt="gauge" priority />
              </div>
              <div className="info d-none">
                <div className="title">
                  <h6>Cotton poplin</h6>
                  <button>
                    <Link href={'/'}>
                      Change
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="#868686"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="only-title">Style</div>
            </div>
          </div>
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="image d-none">
                <Image src="/images/gauge-img.png" width={300} height={200} alt="gauge" priority />
              </div>
              <div className="info d-none">
                <div className="title">
                  <h6>Cotton poplin</h6>
                  <button>
                    <Link href={'/'}>
                      Change
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="#868686"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="only-title">Neck</div>
            </div>
          </div>
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="image d-none">
                <Image src="/images/gauge-img.png" width={300} height={200} alt="gauge" priority />
              </div>
              <div className="info d-none">
                <div className="title">
                  <h6>Cotton poplin</h6>
                  <button>
                    <Link href={'/'}>
                      Change
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11L6 6L1 1"
                          stroke="#868686"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="only-title">Fitting</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
