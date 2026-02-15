import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="cv-container">
      <Header />
      <main>
        <section>
            <h2>Про мене</h2>
            <p>
                Я студент спеціальності "Кібербезпека", глибоко захоплений IT.
                Зараз працюю на посаді молодшого IT-аудитора, де застосовую свої знання на практиці.
            </p>
        </section>
        <Education />
        <Experience />
        <Skills />
      </main>
      <footer>
          <p>&copy; 2026 Данило Недобора. Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;