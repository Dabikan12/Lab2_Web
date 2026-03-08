import styles from './Education.module.css';

function Education() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                <span>🎓</span> Освіта
            </h2>

            <div className={styles.schoolBlock}>
                <strong className={styles.university}>
                    Національний університет "Львівська політехніка"
                </strong>
                <p className={styles.degree}>
                    Кібербезпека (Cybersecurity)
                </p>
                <time className={styles.date}>
                    2023 — Теперішній час
                </time>
            </div>
        </section>
    );
}

export default Education;