import { useState } from 'react';
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Button from '../UI/Button';
import { FaGithub } from 'react-icons/fa';

interface Project {
  number: string;
  image: string;
  title: string;
  description: string;
  tools: string;
  projectLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    number: '01',
    image: 'caravanRestaurant.png',
    title: 'Web Development Project',
    description:
      'Die Website für die fiktive Caravan Restaurant ist ein moderner One-Pager in ansprechendem dunklen Design. Das Layout ist darauf ausgelegt, den Besucher der Seite zu einem Besuch im Restaurant anzuregen. Ich habe das Design responsive umgesetzt und für gängige Bildschirmgrößen optimiert.',
    tools: 'HTML , Css, Responsive Design ',
    projectLink: 'https://abbosaliy.github.io/Restaruant-Caravan/',
    codeLink: 'https://github.com/abbosaliy/Restaruant-Caravan',
  },
  {
    number: '02',
    image: 'weatherApp.png',
    title: 'Moderne Wetter App',
    description:
      'Meine moderne Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an. Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert. Der Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste zu bearbeiten.',
    tools: 'HTML, JavaScrip, CSS , BEM , WeatherAPI',
    projectLink: 'https://abbosaliy.github.io/Wetter-App/',
    codeLink: 'https://github.com/abbosaliy/Wetter-App.git',
  },
  {
    number: '03',
    image: 'witzeApp.png',
    title: 'Web Development Project',
    description:
      'Als Kind habe ich Witze-Bücher geliebt - Jetzt habe ich meine eigene Witze-App entwickelt! Hierfür habe ich eine öffentliche API verwendet, um die Witze dynamisch zu laden und anzuzeigen. Das Design ist auf Mobilgeräte optimiert und nach SCSS Best Practices optimiert.',
    tools: 'HTML, JavaScrip, SCSS , BEM , Vite, AJAX',
    projectLink: 'https://abbosaliy.github.io/Witze-app/',
    codeLink: 'https://github.com/abbosaliy/Witze-app',
  },
];

function ProjekteCard() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function hadleNext() {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projects.length - 1);
    }
  }

  return (
    <div className="container">
      <div className=" flex    flex-col xl:flex-row gap-10 xl:justify-between ">
        <div className="relative h-full  w-full   xl:order-2">
          <img
            className="h-full w-full object-cover"
            src={projects[currentIndex].image}
            alt="photo"
          />
          <Button
            onClick={handlePrev}
            title=""
            className="xl:hidden absolute top-1/2 left-4 -translate-y-1/2 bg-blue-500 hover:bg-white text-black p-3 rounded-lg shadow transition cursor-pointer"
          >
            <GoChevronLeft />
          </Button>
          <Button
            onClick={hadleNext}
            title=""
            className="xl:hidden absolute top-1/2 right-4 -translate-y-1/2 bg-blue-500 hover:bg-white text-black p-3  rounded-lg shadow transition cursor-pointer"
          >
            <GoChevronRight />
          </Button>
          <div className=" max-xl:hidden flex items-center justify-end gap-10 pt-8 ">
            <Button
              onClick={handlePrev}
              title=""
              className="bg-blue-500 hover:bg-blue-400 text-black text-3xl p-3  rounded-lg shadow transition"
            >
              <GoChevronLeft />
            </Button>

            <Button
              onClick={hadleNext}
              title=""
              className=" bg-blue-500 hover:bg-blue-400 text-black text-3xl p-3  rounded-lg shadow transition"
            >
              <GoChevronRight />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8 xl:w-350 ">
          <h1 className="text-8xl ">{projects[currentIndex].number}</h1>
          <h1 className="text-5xl font-bold ">
            {projects[currentIndex].title}
          </h1>
          <p className="text-xl text-slate-400">
            {projects[currentIndex].description}
          </p>
          <h2 className="text-blue-500 text-lg md:text-2xl font-bold  pb-3 border-b-3 border-b-white/30 ">
            {projects[currentIndex].tools}
          </h2>
          <div className="flex items-center gap-10 pt-8">
            <div className="relative group">
              <a
                href={projects[currentIndex].projectLink}
                target="_blank"
              >
                <GoArrowUpRight className="w-20 h-20 p-2 bg-slate-800 rounded-full hover:text-blue-500" />
              </a>

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg text-black bg-white px-6 py-2 rounded opacity-0 whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Live project
              </div>
            </div>
            <div className="relative group">
              <a
                href={projects[currentIndex].codeLink}
                target="_blank"
              >
                <FaGithub className="w-20 h-20  p-4 bg-slate-800 rounded-full hover:text-blue-500" />
              </a>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-lg  text-black bg-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjekteCard;
