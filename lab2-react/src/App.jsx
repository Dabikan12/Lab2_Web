import styles from './App.module.css';

import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className={styles.appContainer}>
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
                <h2 className={styles.aboutTitle}>
                    <span className="mr-2">🚀</span> Про мене
                </h2>
                <p className={styles.aboutText}>
                    Я студент спеціальності "Кібербезпека", глибоко захоплений IT.
                    Наразі працюю на посаді <strong>Junior IT Auditor в PwC</strong>, де поєдную академічні знання з практичним досвідом аналізу ризиків та перевірки безпеки інформаційних систем. Вмотивований розвиватися у сфері інформаційної безпеки.
                </p>
           </section>

           <Experience />
        </main>
      </div>
    </div>
  );
}

export default App;