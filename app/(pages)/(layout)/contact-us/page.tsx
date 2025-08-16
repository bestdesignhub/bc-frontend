'use client';

import { useState } from 'react';

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <main style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.text}>Have questions or feedback? We would love to hear from you!</p>
            {submitted ? (
                <p style={{ color: 'green', fontSize: '1.1rem' }}>Thank you! We’ll be in touch soon.</p>
            ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </label>

                    <label style={styles.label}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </label>

                    <label style={styles.label}>
                        Message:
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            style={styles.textarea}
                        ></textarea>
                    </label>

                    <button type="submit" style={styles.button}>Send Message</button>
                </form>
            )}
        </main>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1.1rem',
        marginBottom: '1.5rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    input: {
        marginTop: '0.5rem',
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textarea: {
        marginTop: '0.5rem',
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        resize: 'vertical',
    },
    button: {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};
