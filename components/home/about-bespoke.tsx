import Image from "next/image";
import "@/app/styles/zee-zap.css";
import { getAWSImageUrl } from "@/utils/common.utils";

interface IAboutBespokeProps {
    aboutData?: any; // array from API or static JSON
}

export default function AboutBespoke({ aboutData }: IAboutBespokeProps) {
    if (!aboutData?.length) return null;

    // Pick specific items by index (10 to 14 in your dataset)
    const bespokeItems = [10, 11, 12, 13, 14].map((i) => aboutData[i]).filter(Boolean);

    return (
        <section className="about-bespoke">
            <div className="f-container">
                <h3>
                    {/* <span>About</span> Bespoke Cashmere */}
                    {bespokeItems[0]?.link}
                </h3>
                <ul className="bespoke-list">
                    {bespokeItems.map((item: any) => (
                        <li key={item.uuid}>
                            <span className="a-icon">
                                <Image
                                    src={getAWSImageUrl(item.image)}
                                    alt={item.title}
                                    width={60}
                                    height={60}
                                    loading="lazy"
                                />
                            </span>
                            <span className="service-name">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
