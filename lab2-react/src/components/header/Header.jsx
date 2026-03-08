import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.avatarWrapper}>
                <div className="relative">
                    <img
                        src="/avatar.jpg"
                        alt="Данило Недобора"
                        className={styles.avatar}
                    />
                </div>
            </div>

            <h1 className={styles.name}>
                Данило<br />Недобора
            </h1>
            <p className={styles.role}>
                Junior IT Auditor | Кібербезпека
            </p>

            <div className={styles.contactsList}>
                <a href="tel:+380980069582" className={styles.contactItem}>
                    <span className={styles.icon}>📞</span>
                    +380 98 006 9582
                </a>
                <a href="mailto:d.nedobora.al@gmail.com" className={styles.contactItem}>
                    <span className={styles.icon}>✉️</span>
                    d.nedobora.al@gmail.com
                </a>
                <div className={styles.contactItem}>
                     <span className={styles.icon}>📍</span>
                     Львів, Україна
                </div>
            </div>
        </header>
    );
}

export default Header;