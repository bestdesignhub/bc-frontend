'use client';

import { setUserLocale } from '@/config/locale';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { Locale } from '@/types';
import { useLocale } from 'next-intl';
import React from 'react';

const LOCALES = [
  { code: 'en', name: 'English' },
  { code: 'da', name: 'Danish' },
] as const;

const Settings = () => {
  const defaultLocale = useLocale();

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLoading(true));
    const newLocale = event.target.value;
    await setUserLocale(newLocale as Locale);
    window.location.reload();
  };

  return (


    <div className="country-selecter">
    <button className="country-dropdown" type="button">Text</button>
    <select value={defaultLocale} onChange={handleChange}>
    {LOCALES.map((locale) => (
      <option className='en' key={locale.code} value={locale.code}>
                         {locale.name}
                       </option>
                     ))}
                   </select>

    {/* <ul className="country-list">
        <li>
           <a href="#" title="English">
                <span className="country-flag">
                    <img src="images/english.png" alt="English" />
                </span>
                <span className="country-name">English</span>
            </a>
        </li>
        <li>
            <a href="#" title="danish">
                <span className="country-flag">
                    <img src="images/danish.png" alt="danish" />
                </span>
                <span className="country-name">danish</span>
            </a>
        </li>
    </ul> */}
</div>

    // <div className="my-account-block-main">
    //   <div className="border-box-account">
    //     <div className="form-main">
    //       <form>
    //         <Row>
    //           <Col sm={4}>
    //             <div className="input-box">
    //               <select value={defaultLocale} onChange={handleChange}>
    //                 {LOCALES.map((locale) => (
    //                   <option key={locale.code} value={locale.code}>
    //                     {locale.name}
    //                   </option>
    //                 ))}
    //               </select>
    //             </div>
    //           </Col>
    //         </Row>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Settings;
