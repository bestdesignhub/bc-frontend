import Image from "next/image";
import Link from "next/link";
import "@/app/styles/zee-zap.css";
import { getAWSImageUrl } from "@/utils/common.utils";

interface IExploreCollectionProps {
    collectionData?: any; // Loose type like in your example
}

export default function ExploreCollection({ collectionData }: IExploreCollectionProps) {
    // Find the "Explore our Yarn Collection" data
    // const collectionItem = collectionData?.find(
    //     (item: any) => item.title === "Explore our Yarn Collection"
    // );
    const collectionItem = collectionData[9];

    if (!collectionItem) return null;

    return (
        <section className="explore-collection f-container">
            <div className="collection-content">
                <h3>{collectionItem.title}</h3>
                <p>{collectionItem.image_link}</p>
                <Link
                    target="_blank"
                    className="download-book"
                    href="http://bespoke-cashemeres.s3.eu-west-1.amazonaws.com/documents/real-image/1750489344254_certi.pdf"
                    title="Download Book"
                >
                    Download Book
                </Link>
            </div>
            <div className="collection-img">
                <Image
                    src={getAWSImageUrl(collectionItem.image)}
                    alt={collectionItem.title}
                    width={500}
                    height={400}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
