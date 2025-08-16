import Head from 'next/head';
import NewInContent from './NewInContent';

export default function NewInPage() {
    return (
        <>
            <Head>
                <title>New In | Bespoke Cashmere</title>
                <meta name="description" content="Explore the latest arrivals in our collection." />
            </Head>
            <main className="container">
                <NewInContent />
            </main>
        </>
    );
}
