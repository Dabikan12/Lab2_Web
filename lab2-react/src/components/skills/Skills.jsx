import styles from './Skills.module.css';

function Skills() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                <span>🛠️</span> Навички
            </h2>

            <div className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>Programming Languages</h3>
                <div className={styles.badgeList}>
                    <span className={`${styles.badge} ${styles.techBadge}`}>Python</span>
                    <span className={`${styles.badge} ${styles.techBadge}`}>C / C#</span>
                    <span className={`${styles.badge} ${styles.techBadge}`}>JavaScript</span>
                    <span className={`${styles.badge} ${styles.techBadge}`}>SQL</span>
                </div>
            </div>

            <div className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>Security & Tools</h3>
                <div className={styles.badgeList}>
                    <span className={`${styles.badge} ${styles.toolBadge}`}>Nmap</span>
                    <span className={`${styles.badge} ${styles.toolBadge}`}>Wireshark</span>
                    <span className={`${styles.badge} ${styles.toolBadge}`}>Maltego</span>
                    <span className={`${styles.badge} ${styles.toolBadge}`}>PowerBI</span>
                </div>
            </div>

            <div className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>Soft Skills</h3>
                 <div className={styles.badgeList}>
                    <span className={`${styles.badge} ${styles.softBadge}`}>Стратегічне мислення</span>
                    <span className={`${styles.badge} ${styles.softBadge}`}>Командна робота</span>
                    <span className={`${styles.badge} ${styles.softBadge}`}>Тайм-менеджмент</span>
                    <span className={`${styles.badge} ${styles.softBadge}`}>Креативність</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;