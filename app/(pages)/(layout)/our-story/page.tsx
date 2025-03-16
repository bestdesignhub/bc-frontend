import { OurStoryList } from '@/components/our-story';
import { URL_SLUG } from '@/constants';
import { getBannerBySlug, getStoryPageList } from '@/utils/server-api.utils';

export default async function OurStoryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams?.[URL_SLUG.PAGINATION.PAGE] || '1';

  const dropdownRequests = [
    getStoryPageList(+page),
    getBannerBySlug('our-story')
  ];


  // Execute all dropdown requests
  const results = await Promise.allSettled(dropdownRequests);

  // Extract results safely
  const storyListData = results[0].status === 'fulfilled' ? results[0].value : {};
  const bannerData = results[1].status === 'fulfilled' ? results[1].value : {};


  return <OurStoryList storyListData={storyListData} bannerData={bannerData} />;
}
