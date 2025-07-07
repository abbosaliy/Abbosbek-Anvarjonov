import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Kontakt from './components/Kontakt/Kontakt';
import Lebenslauf from './components/Lebenslauf/lebenslauf';
import ProjekteCard from './components/Projekte/Projekte';

function App() {
  return (
    <div className="flex flex-col items-center scroll-smooth">
      <div className="container flex flex-col gap-10">
        <Header />

        <main className="flex items-center flex-col gap-20">
          <section id="hero">
            <Hero />
          </section>

          <section id="lebenslauf">
            <Lebenslauf />
          </section>

          <section id="projekte">
            <ProjekteCard />
          </section>

          <section id="kontakt">
            <Kontakt />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
