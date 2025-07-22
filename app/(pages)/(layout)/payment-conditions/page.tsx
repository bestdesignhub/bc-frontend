import Head from 'next/head';
import PaymentConditionsContent from './PaymentConditionsContent';

export default function PaymentConditionsPage() {
    return (
        <>
            <Head>
                <title>Payment Conditions | Bespoke Cashmere</title>
                <meta name="description" content="Understand our payment terms and conditions." />
            </Head>
            <main className="container">
                <PaymentConditionsContent />
            </main>
        </>
    );
}
