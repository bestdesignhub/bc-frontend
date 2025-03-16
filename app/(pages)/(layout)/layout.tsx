import { Layout } from '@/components';

export default async function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Layout>{children}</Layout>;
    </>
  );
}
