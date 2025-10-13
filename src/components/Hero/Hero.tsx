import { GoArrowDown } from 'react-icons/go';
import Photo from '../Hero/Photo/Photo';
import SocialLinks from '../UI/SocialLinks';
import { HashLink } from 'react-router-hash-link';

function Hero() {
  return (
    <div className="container flex items-center flex-col">
      <div className="flex flex-col gap-20  items-center pt-20 xl:items-start xl:flex-row   xl:pb-40  ">
        <div className="xl:order-2">
          <Photo />
        </div>

        <div className="flex  text-center items-center xl:items-start xl:text-left flex-col">
          <h2 className="text-xl xl:text-2xl">
            Hi, ich bin <span className="font-bold">Abbosbek</span>
          </h2>
          <h1 className="text-4xl pt-8 xl:text-4xl">
            Ihr neuer
            <br />
            <span className="text-5xl  font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Frontend Developer<span className="text-white">.</span>
            </span>
          </h1>
          <p className="max-w-[500px] pt-6 text-lg xl:text-xl pb-8 text-slate-400 font-mono">
            Ich bin ein leidenschaftlicher Frontend-Entwickler mit Fokus auf
            moderne Webtechnologien wie React, TypeScript, Tailwind CSS.
            <br />
            Ich entwickle benutzerfreundliche, performante und visuell
            ansprechende Webanwendungen. Mein Ziel ist es, intuitive
            Benutzeroberflächen zu gestalten und stetig neue Technologien zu
            erlernen.
          </p>
          <div className="flex flex-col  items-center gap-10 xl:flex-row">
            <HashLink
              to="#projekte"
              className=" flex items-center font-bold  justify-center  gap-2 rounded-full border-2 px-15 py-3 xl:px-20   text-lg    border-blue-500 hover:bg-blue-500 hover:text-slate-950 transition-all whitespace-nowrap duration-300"
            >
              Projekte Ansehen
              <GoArrowDown className="text-xl  font-bold" />
            </HashLink>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
