import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Kontakt from '../Kontakt/Kontakt';
import Lebenslauf from '../Lebenslauf/lebenslauf';
import ProjekteCard from '../Projekte/Projekte';

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-3">
      <Header />
      <main className="flex items-center flex-col gap-20">
        <section
          className="container"
          id="hero"
        >
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
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
