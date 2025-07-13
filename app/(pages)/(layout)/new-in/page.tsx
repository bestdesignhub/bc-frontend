

import Head from 'next/head';

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>New In | Bespoke Cashmere</title>
                <meta name="description" content="Learn about our company's story, mission, and values." />
            </Head>

            <main style={styles.container}>
                <h1 style={styles.heading}>New In</h1>
                <section style={styles.section}>
                    <p style={styles.text}>
                        Welcome to <strong>Bespoke Cashmere</strong>. We are a team of passionate individuals
                        committed to making a difference. Since our founding in <strong>2025</strong>,
                        we’ve been focused on delivering high-quality products and services that
                        empower our customers and make their lives better.
                    </p>

                    <p style={styles.text}>
                        Our journey started with a simple idea: to build solutions that are not only effective
                        but also meaningful. Over the years, we’ve grown into a diverse team that thrives on
                        creativity, collaboration, and a shared sense of purpose.
                    </p>

                    <p style={styles.text}>
                        We believe in transparency, integrity, and constant improvement — values that guide
                        everything we do. We’re excited about the future and grateful to have you as part
                        of our story.
                    </p>
                </section>
            </main>
        </>
    );
}

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    section: {
        marginTop: '1.5rem',
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        marginBottom: '1.2rem',
    },
};
