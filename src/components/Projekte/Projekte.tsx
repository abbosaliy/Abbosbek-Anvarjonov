import { FaGithub } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

function ProjekteCard() {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 pt-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="font-semibold text-4xl">Meine Projekte</h2>
          <p className="text-slate-400 font-mono text-lg ">
            Hier sind einige Auszüge aus meiner Arbeit, sodass Sie sich ein Bild
            meiner Fähigkeiten und Erfahrungen machen können.
          </p>
        </div>
        <div className=" grid md:grid-cols-2  lg:grid-cols-3 gap-10 h-auto">
          <div className=" flex flex-col items-start gap-5">
            <img
              className="w-full"
              src="/Abbosbek-Anvarjonov/weatherApp.png"
              alt="projek-2"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">Moderne Wetter App</h2>
              <p className="text-slate-400 font-mono text-lg">
                Meine moderne Wetter App zeigt aktuelle Wetterdaten für Städte
                auf der ganzen Welt an. Die App wurde "mobile-first" entwickelt
                und für Mobilgeräte aller Art optimiert. Der Nutzer hat die
                Möglichkeit, Orte in einer Favoritenliste zu speichern und diese
                Liste zu bearbeiten.
              </p>
              <h2 className="text-blue-500 text-lg font-bold border-b-3 border-b-white/30">
                HTML JavaScript SCSS Vite BEM WeatherAPI
              </h2>
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://github.com/abbosaliy/Wetter-App.git"
                  >
                    <FaGithub className="w-15 h-15  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://abbosaliy.github.io/Wetter-App/"
                  >
                    <GoArrowUpRight className="w-15 h-15 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    Live project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-5">
            <img
              className="w-full"
              src="/Abbosbek-Anvarjonov/caravanRestaurant.png"
              alt="projekt-1"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">Caravan Restaurant</h2>
              <p className="text-slate-400 font-mono text-lg">
                Die Website für die fiktive Caravan Restaurant ist ein moderner
                One-Pager in ansprechendem dunklen Design. Das Layout ist darauf
                ausgelegt, den Besucher der Seite zu einem Besuch im Restaurant
                anzuregen. Ich habe das Design responsive umgesetzt und für
                gängige Bildschirmgrößen optimiert.
              </p>
              <h2 className="text-blue-500 text-lg font-bold border-b-3 border-b-white/30">
                HTML CSS Responsive Design
              </h2>
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://github.com/abbosaliy/Restaruant-Caravan.git"
                  >
                    <FaGithub className="w-15 h-15  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://abbosaliy.github.io/Restaruant-Caravan/"
                  >
                    <GoArrowUpRight className="w-15 h-15 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    Live project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-5">
            <img
              className="w-full"
              src="/Abbosbek-Anvarjonov/portfolio.png"
              alt="projekt-3"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">Mein Portfolio</h2>
              <p className="text-slate-400 font-mono text-lg">
                Dieses Portfolio wurde mit React, TypeScript und Tailwind CSS
                erstellt. Es bietet ein modernes, ansprechendes und vollständig
                responsives Design, das sowohl auf Desktop- als auch auf
                Mobilgeräten optimal dargestellt wird. Der Fokus liegt auf
                Benutzerfreundlichkeit, Klarheit und zeitgemäßem Webdesign.
              </p>
              <h2 className="text-blue-500 text-lg font-bold border-b-3 border-b-white/30">
                React TypeScript TailwindCSS Vite
              </h2>
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://github.com/abbosaliy/Abbosbek-Anvarjonov.git"
                  >
                    <FaGithub className="w-15 h-15  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://abbosaliy.github.io/Abbosbek-Anvarjonov/"
                  >
                    <GoArrowUpRight className="w-15 h-15 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    Live project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-5">
            <img
              className="w-full"
              src="/Abbosbek-Anvarjonov/witzeApp.png"
              alt="witzeApp"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">Lustige Witze App</h2>
              <p className="text-slate-400 font-mono text-lg">
                Diese humorvolle Witze-App wurde mit Fokus auf modernes Design
                und Benutzerfreundlichkeit entwickelt. Sie ist vollständig
                responsive, bietet einen hellen und dunklen Modus und lädt
                zufällige Witze aus einer externen API. Ideal für Nutzer, die
                jederzeit einen lustigen Moment brauchen.
              </p>
              <h2 className="text-blue-500 text-lg font-bold border-b-3 border-b-white/30">
                HTML JavaScript SCSS BEM Vite AJAX
              </h2>
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://github.com/abbosaliy/Witze-app.git"
                  >
                    <FaGithub className="w-15 h-15  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://abbosaliy.github.io/Witze-app/"
                  >
                    <GoArrowUpRight className="w-15 h-15 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    Live project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-5">
            <img
              className="w-full "
              src="/Abbosbek-Anvarjonov/nutzerverwaltung.png"
              alt="nutzerverwaltung"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">Nutzerverwaltung</h2>
              <p className="text-slate-400 font-mono text-lg">
                Frontend-Anwendung zur Verwaltung von Nutzerdaten mit
                vollständiger CRUD- Funktionalität: Nutzer können erstellt,
                angezeigt, bearbeitet und gelöscht werden. Fokus auf saubere
                Komponentenstruktur, Formularhandling und State-Management mit
                React.
              </p>
              <h2 className="text-blue-500 text-lg font-bold border-b-3 border-b-white/30">
                TypeScript SCSS React
              </h2>
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://github.com/abbosaliy/Nutzerverwaltung.git"
                  >
                    <FaGithub className="w-15 h-15  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://abbosaliy.github.io/Nutzerverwaltung/"
                  >
                    <GoArrowUpRight className="w-15 h-15 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    Live project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-5">
            <img
              className="w-full "
              src="/Abbosbek-Anvarjonov/notizApp.png"
              alt="notizApp"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">Notiz App </h2>
              <p className="text-slate-400 font-mono text-lg">
                Webanwendung zur Erstellung, Bearbeitung und lokalen Speicherung
                von Notizen im Browser. Der Fokus liegt auf klarer
                Benutzerführung und zuverlässiger Datenspeicherung ohne Backend.
              </p>
              <h2 className="text-blue-500 text-lg font-bold border-b-3 border-b-white/30">
                HTML CSS JavaScript LocalStorage
              </h2>
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://github.com/abbosaliy/Notiz-app.git"
                  >
                    <FaGithub className="w-15 h-15  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    GitHub
                  </div>
                </div>

                <div className="relative group">
                  <a
                    target="_blank"
                    href="https://abbosaliy.github.io/Notiz-app/"
                  >
                    <GoArrowUpRight className="w-15 h-15 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
                  </a>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    Live project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjekteCard;
