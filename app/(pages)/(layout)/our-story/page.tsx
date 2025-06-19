import { OurStoryList } from '@/components/our-story';
// import { URL_SLUG } from '@/constants';
// import { getBannerBySlug, getStoryPageList } from '@/utils/server-api.utils';

export default async function OurStoryPage({
  // searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  // const resolvedSearchParams = await searchParams;
  // const page = resolvedSearchParams?.[URL_SLUG.PAGINATION.PAGE] || '1';

  // const dropdownRequests = [
  //   getStoryPageList(+page),
  //   getBannerBySlug('our-story')
  // ];


  // Extract results safely

  return <OurStoryList />;
}
