import styles from './Experience.module.css';

function Experience() {
    return (
        <section>
            <h2 className={styles.sectionTitle}>
                <span>💼</span> Досвід роботи
            </h2>

            <div className={styles.listContainer}>

                <div className={styles.card}>
                    <div className={styles.logoWrapper}>
                        <img src="/pwc.jpg" alt="PwC Logo" className={styles.logo} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h3 className={styles.role}>Junior IT Auditor</h3>
                            <span className={`${styles.badge} ${styles.badgeActive}`}>Теперішній час</span>
                        </div>
                        <span className={styles.company}>PwC Ukraine</span>
                        <p className={styles.description}>
                            Участь у проєктах з IT-аудиту, аналіз бізнес-процесів, перевірка IT-контролів та оцінка ризиків інформаційної безпеки.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.logoWrapper}>
                        <img src="/lpnu.jpg" alt="Student Government Logo" className={styles.logo} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h3 className={styles.role}>IT Support Specialist</h3>
                            <span className={`${styles.badge} ${styles.badgeActive}`}>2024 - Теперішній час</span>
                        </div>
                        <span className={styles.company}>Students Government</span>
                        <p className={styles.description}>
                            Технічна підтримка заходів, налаштування мережевого обладнання та адміністрування веб-ресурсів студради.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.logoWrapper}>
                        <img src="/colegium.jpg" alt="Collegium Logo" className={styles.logo} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h3 className={styles.role}>Active Member / Vice-head</h3>
                            <span className={`${styles.badge} ${styles.badgePast}`}>2023 — 2024</span>
                        </div>
                        <span className={styles.company}>Student Organization Collegium</span>
                        <p className={styles.description}>
                            Організація студентських івентів, волонтерська діяльність та участь у соціальних проєктах університету.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;