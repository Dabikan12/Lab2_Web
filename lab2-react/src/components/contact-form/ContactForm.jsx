import { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 60000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
                <h3 className={styles.title}>Зворотній зв'язок</h3>
                <form action="https://formspree.io/f/xwvrpdry" method="POST" className={styles.form}>
                    <input type="text" name="name" placeholder="Ім'я" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Повідомлення" required></textarea>
                    <button type="submit">Відправити</button>
                </form>
            </div>
        </div>
    );
}
export default ContactForm;