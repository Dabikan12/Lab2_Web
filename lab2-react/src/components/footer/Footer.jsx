import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

function Footer() {
    const [sysInfo, setSysInfo] = useState('');

    useEffect(() => {
        const info = `${navigator.userAgent} | ${navigator.platform}`;
        localStorage.setItem('system_info', info);
        setSysInfo(localStorage.getItem('system_info'));
    }, []);

    return (
        <footer className={styles.footer}>
            <p>&copy; 2026 Данило Недобора</p>
            <div className={styles.systemInfo}>
                {sysInfo}
            </div>
        </footer>
    );
}
export default Footer;