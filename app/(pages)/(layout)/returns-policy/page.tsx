import Head from 'next/head';
import ReturnPolicyContent from './ReturnPolicyContent';

export default function ReturnPolicyPage() {
    return (
        <>
            <Head>
                <title>Return Policy | Bespoke Cashmere</title>
                <meta name="description" content="Read our return and exchange policy." />
            </Head>
            <main className="container">
                <ReturnPolicyContent />
            </main>
        </>
    );
}
