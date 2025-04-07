import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import './globals.css';
import './style.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';
import { StoreProvider } from '@/lib/redux/provider';
import { FullPageLoading } from '@/components';
import { PageSwitchComponent } from '@/components/page-switch-component';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN_URL || '';

  return {
    title: 'Bespoke Cashmeres',
    description: 'Bespoke Cashmeres - Premium Quality Cashmere Products',
    openGraph: {
      title: 'Bespoke Cashmeres',
      description: 'Experience the finest cashmere with Bespoke Cashmeres.',
      url: domain,
      type: 'website',
      images: [
        {
          url: `${domain}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: 'Bespoke Cashmeres',
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Toaster position="top-right" />
          <StoreProvider>
            <FullPageLoading />
            <PageSwitchComponent />
            {children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
