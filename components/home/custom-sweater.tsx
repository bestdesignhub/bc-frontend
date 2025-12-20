import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/zee-zap.css';
import { getAWSImageUrl } from '@/utils/common.utils';

interface ICustomSweaterProps {
    sweaterData?: any[]; // Array of card objects
}

export default function CustomSweater({ sweaterData }: ICustomSweaterProps) {
    if (!sweaterData?.length) return null;


    // Optionally pick a specific card as styleCard (e.g., the fourth card or adjust as needed)
    const styleCard = sweaterData[3]; // Using the fourth card as styleCard, adjust index if needed

    return (
        <section className="create-custom">
            <div className='full-container'>
                {styleCard && (
                    <div className="your-style">
                        <div className='style-description'>
                            <h3>{styleCard.title.en}</h3>
                            {/* <h3>{styleCard.description.en || 'Custom Solutions'}</h3> */}
                            <ul className="custom-sweater-btn">
                                <li>
                                    <Link href="/sweater" title="Create My SWEATER">
                                        Create My SWEATER
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop" title="customise a Sweater">
                                        Customise a Sweater
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="image-wrapper">
                            <Image
                                src={getAWSImageUrl(styleCard.image)}
                                alt={styleCard.title.en}
                                fill
                                sizes="100vw"
                                className="auto-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                )}
            </div>
            <aside className="full-container icon-bg">
                {/* <div className='icon-container'>
                    <h3>Create Custom Sweater</h3>
                    <ul className="custom-sweater-list">
                        {sweaterSteps.map((step: any) => (
                            <li key={step._id || step.uuid || Math.random().toString(36).substr(2, 9)}>
                                <div className="custom-sweater-img">
                                    <Link href="#" title={step.title.en}>
                                        <Image
                                            src={getAWSImageUrl(step.image)}
                                            alt={step.title.en}
                                            width={232}
                                            height={232}
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                                <Link className="custom-sweater-name" href="#" title={step.title.en}>
                                    {step.title.en}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* <ul className="custom-sweater-btn">
                    <li>
                        <Link href="/sweater" title="Create My SWEATER">
                            Create My SWEATER
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" title="customise a Sweater">
                            Customise a Sweater
                        </Link>
                    </li>
                </ul> */}
            </aside>


        </section>
    );
}