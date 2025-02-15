'use client';
import '@/app/styles/header.css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TopMenu from '../../components/header/top-menu';
interface ISaleProps {
  _id: string;
  slug: string;
  button_url: string;
  start_time: string;
  end_time: string;
  createdAt: string;
  updatedAt: string;
  title: string;
}

export default function TopBar({ flashSale }: Readonly<{ flashSale: ISaleProps }>) {
  const t = useTranslations();
  const { start_time, end_time } = flashSale;
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isSaleActive, setIsSaleActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const saleStart = new Date(start_time);
      const saleEnd = new Date(end_time);

      // Check if current date is between start_time and end_time
      if (currentTime >= saleStart && currentTime <= saleEnd) {
        setIsSaleActive(true);

        // Calculate the remaining time
        const timeDiff = saleEnd.getTime() - currentTime.getTime(); // Difference in milliseconds
        if (timeDiff <= 0) {
          clearInterval(interval); // Clear interval once the sale ends
        } else {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

          setTimeRemaining({
            days,
            hours,
            minutes,
            seconds,
          });
        }
      } else {
        setIsSaleActive(false); // Sale is not active if not in the time range
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [start_time, end_time]);

  return (
    <>
      {isSaleActive && (
        <div className="topbar">
          <div className="container">
            <div className="flexrow justify-content-between">
              <div className="topbar_item">
                <ul>
                  <li>{flashSale?.title}</li>
                  {/* <li>
                    <Link href={flashSale?.button_url}>{t('FLASH_SALE.SHOP_NOW')}</Link>
                  </li> */}
                </ul>
              </div>
              <TopMenu />
              {/* <div className="topbar_item">
                <div className="flexrow count-row">
                  <div className="count-item">
                    <div className="countbox">
                      <h5>{timeRemaining?.days}</h5>
                      <p>{t('FLASH_SALE.DAYS')}</p>
                    </div>
                  </div>
                  <div className="count-item">
                    <div className="countbox">
                      <h5>{timeRemaining?.hours}</h5>
                      <p>{t('FLASH_SALE.HOURS')}</p>
                    </div>
                  </div>
                  <div className="count-item">
                    <div className="countbox">
                      <h5>{timeRemaining?.minutes}</h5>
                      <p>{t('FLASH_SALE.MINUTES')}</p>
                    </div>
                  </div>
                  <div className="count-item">
                    <div className="countbox">
                      <h5>{timeRemaining?.seconds}</h5>
                      <p>{t('FLASH_SALE.SECONDS')}</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
