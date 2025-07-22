import Head from 'next/head';
import TermsOfUseContent from './TermsOfUseContent';

export default function TermsOfUsePage() {
    return (
        <>
            <Head>
                <title>Terms of Use | Bespoke Cashmere</title>
                <meta name="description" content="Review the terms and conditions for using our website." />
            </Head>
            <main className="container">
                <TermsOfUseContent />
            </main>
        </>
    );
}
