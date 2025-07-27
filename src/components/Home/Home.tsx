import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import ProjekteCard from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

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
          <Resume />
        </section>

        <section id="projekte">
          <ProjekteCard />
        </section>

        <section id="kontakt">
          <Contact />
        </section>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
