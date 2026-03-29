import { useState, useEffect } from 'react';
import styles from './App.module.css';

import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';
import ContactForm from './components/contact-form/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${styles.appContainer} ${theme === 'dark' ? styles.darkMode : ''}`}>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
      </button>

      <div className={styles.cardWrapper}>
        <aside className={styles.sidebar}>
          <Header />
          <hr className={styles.separator} />
          <Skills />
          <hr className={styles.separator} />
          <Education />
        </aside>

        <main className={styles.mainContent}>
          <section className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>Про мене</h2>
            <p className={styles.aboutText}>
              Я студент спеціальності "Кібербезпека", Junior IT Auditor в PwC.
              Вмотивований розвиватися у сфері інформаційної безпеки.
            </p>
          </section>

          <Experience />
          <Reviews />
        </main>
      </div>

      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;