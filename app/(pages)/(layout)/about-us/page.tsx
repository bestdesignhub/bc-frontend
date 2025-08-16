import Head from 'next/head';
import AboutUsContent from './AboutUsContent';

export default function AboutUsPage() {
    return (
        <>
            <Head>
                <title>About Us | Bespoke Cashmere</title>
                <meta name="description" content="Learn about our company" />
            </Head>
            <main className="container">
                <AboutUsContent />
            </main>
        </>
    );
}
