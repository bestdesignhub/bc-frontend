import { OurStoryList } from '@/components/our-story';
import { getStoryPageList } from '@/utils/server-api.utils';

export default async function OurStoryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams?.page || '1'; // Default to '1' if page is missing

  const storyListData = await getStoryPageList(+page);

  return <OurStoryList storyListData={storyListData} />;
}
