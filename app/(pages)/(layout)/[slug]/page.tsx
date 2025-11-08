
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
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden mb-12">
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
                width={1200} height={476}
              />
            </a>
          ) : (
            <img
              src={getAWSImageUrl(page.bannerImage)}
              alt={page.title}
              className="w-full h-full object-cover brightness-75"
              width={1200} height={476}
            />
          )}

          {/* Overlay Title */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
              {page.title}
            </h1>
          </div>
        </div>
      ) : (
        // If no banner image, show simple title
        <h1 className="text-4xl font-bold text-center my-10">{page.title}</h1>
      )}

      {/* Main Content */}
      {page.content && (
        <div
          className="prose max-w-4xl mx-auto mb-16 px-4"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      )}

      {/* Alternating Sections */}
      {page.sections?.length > 0 && (
        <div className="space-y-20 px-4 cmsPageBottom">
          {page.sections.map((section: Section, idx: number) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 ${isReversed ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Section Image */}
                {section.image && (
                  <div className="md:w-1/2 w-full">
                    <img
                      src={getAWSImageUrl(section.image)}
                      alt={section.title || "Section image"}
                      className="w-full h-auto rounded-xl shadow-md object-cover"
                    />
                  </div>
                )}

                {/* Section Text */}
                <div className="md:w-1/2 w-full">
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
  );
}