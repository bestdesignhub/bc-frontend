import { OurStoryDetail } from '@/components/our-story';
import { fetchStoryById } from '@/utils/server-api.utils';

export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ [key: string]: string }>;
}) {
  const resolvedParams = await params;
  const storyData = await fetchStoryById(resolvedParams.id);

  return <OurStoryDetail storyData={storyData} />;
}
