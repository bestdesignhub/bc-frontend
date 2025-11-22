
import {
  getCMSPage
} from '@/utils/server-api.utils';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Section = {
  title?: string;
  description?: string;
  image?: string;
};

type CmsPage = {
  title: string;
  slug: string;
  content: string;
  sections?: Section[];
};

type CmsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CmsPage({ params }: CmsPageProps) {
  const { slug } = await params;
  const page = await getCMSPage(slug);

  if (!page || !page.slug) {
    notFound();
  }
  return (
    <div className="max-w-7xl mx-auto pb-16 cms-template">
      {/* Banner Section */}
      {page.bannerImage ? (
        <div className="relative w-full main-banner-img overflow-hidden mb-12">
          {page.bannerLink ? (
            <a
              href={page.bannerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={getAWSImageUrl(page.bannerImage)}
                alt={page.title}
                className="w-full h-full object-cover brightness-75"
              // width={1200} height={476}
              />
              <h2>{page.bannerTitle}</h2>
            </a>
          ) : (
            <div>
              <img
                src={getAWSImageUrl(page.bannerImage)}
                alt={page.title}
                className="w-full h-full object-cover brightness-75"
              // width={1200} height={476}
              />
              <div className='f-container'>
                <h2 className='pageTitle'>{page.bannerTitle}</h2>
              </div>
            </div>
          )}
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
              {page.title}
            </h1>
          </div> */}
        </div>
      ) : (
        <></>
        // If no banner image, show simple title
        // <h1 className="text-4xl font-bold text-center my-10 main-banner-text">{page.title}</h1>
      )}
      <div className='f-container'>
        {/* Main Content */}
        {page.content && (
          <div className="cms-intro" dangerouslySetInnerHTML={{ __html: page.content }} />
        )}
        {/* Alternating Sections */}
        {page.sections?.length > 0 && (
          <div className="cmsPageBottom">
            {page.sections.map((section: Section, idx: number) => {
              const isReversed = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`section-content flex flex-col md:flex-row items-center ${isReversed ? "flex-row-reverse" : ""
                    }`}
                >
                  {/* Section Image */}
                  {section.image && (
                    <div className="cms-section-image">
                      <img
                        src={getAWSImageUrl(section.image)}
                        alt={section.title || "Section image"}
                        className="w-full h-auto rounded-xl shadow-md object-cover"
                      />
                    </div>
                  )}

                  {/* Section Text */}
                  <div className="cms-section-text">
                    {section.title && (
                      <h2 className="text-2xl font-semibold mb-3">
                        {section.title}
                      </h2>
                    )}
                    {section.description && (
                      <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}