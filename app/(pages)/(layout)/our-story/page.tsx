// import { OurStoryList } from '@/components/our-story';
// // import { URL_SLUG } from '@/constants';
// // import { getBannerBySlug, getStoryPageList } from '@/utils/server-api.utils';

// export default async function OurStoryPage({
//   // searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string }>;
// }) {
//   // const resolvedSearchParams = await searchParams;
//   // const page = resolvedSearchParams?.[URL_SLUG.PAGINATION.PAGE] || '1';

//   // const dropdownRequests = [
//   //   getStoryPageList(+page),
//   //   getBannerBySlug('our-story')
//   // ];


//   // Extract results safely

//   return <OurStoryList />;
// }



import Head from 'next/head';
import OurStoryContent from '../../../../components/our-story/OurStoryContent';

export default function OurStoryPage() {
  return (
    <>
      <Head>
        <title>Our Story | Bespoke Cashmere</title>
        <meta name="description" content="Discover the story behind our brand" />
      </Head>
      <main className="container">
        <OurStoryContent />
      </main>
    </>
  );
}
