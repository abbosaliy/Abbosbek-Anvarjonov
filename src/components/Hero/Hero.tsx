import Photo from '../Hero/Photo/Photo';
import SocialLinks from '../UI/SocialLinks';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="container flex  flex-col custom-padding custom-gap">
      <div className=" flex items-center flex-col pt-20  gap-10">
        <div className="flex flex-col  gap-15 items-center 2xl:w-[100%] 2xl:flex-row 2xl:justify-between 2xl:items-start">
          <Photo />
          <div className="flex  text-center items-center 2xl:items-start 2xl:text-left flex-col">
            <h2 className="text-xl 2xl:text-4xl">
              Hi, ich bin <span className="font-bold">Abbosbek</span>
            </h2>
            <h1 className="text-4xl pt-8 xl:text-5xl">
              Ihr neuer
              <br />
              <span className="text-5xl  xl:text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                Frontend Developer<span className="text-white">.</span>
              </span>
            </h1>
            <p className="max-w-[500px] pt-6 text-lg xl:text-2xl pb-8 text-slate-400 font-mono">
              Mein Name ist Abbosbek Anvarjonov und ich bin Softwareentwickler
              mit Schwerpunkt auf den Bereich Frontend Web Development aus der
              schönen Stadt Halle (Saalle). Ich liebe es neue Dinge zu lernen
              und Ideen in die Realität zu bringen.
            </p>
            <div className="flex flex-col  items-center gap-10 2xl:flex-row">
              <NavLink
                to={'/projekte'}
                className=" font-bold  xl:text-2xl justify-center  gap-2 rounded-full border-2 px-15 py-3 xl:px-35  xl:py-6 text-lg    border-blue-500 hover:bg-blue-500 hover:text-slate-950 transition-all whitespace-nowrap duration-300"
              >
                Projekte Ansehen
              </NavLink>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
