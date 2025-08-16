import Head from 'next/head';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Bespoke Cashmere</title>
                <meta name="description" content="Understand how we protect your personal data." />
            </Head>
            <main className="container">
                <PrivacyPolicyContent />
            </main>
        </>
    );
}
