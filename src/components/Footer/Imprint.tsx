import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Imprint() {
  return (
    <div className="flex  flex-col min-h-screen">
      <div className="  p-10  ">
        <Link
          to={'/'}
          className="flex items-center gap-2 text-lg font-light hover:text-blue-500"
        >
          <GoArrowLeft className="w-5 h-5" />
          Zurück
        </Link>
      </div>
      <div className="flex flex-grow gap-10 p-10 justify-center-safe items-center min-h-[70vh]">
        <div className="flex flex-col gap-10 text-left max-w-xl w-full">
          <h1 className="text-3xl font-extrabold text-white/50">
            Angaben gemäß § 5 TMG
          </h1>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold mb-4 text-blue-500">
              Impressum
            </h1>
            <p className="text-white/50 text-lg">Abbosbek Anvarjonov</p>
            <p className="text-white/50 text-lg">Ringerweg 4</p>
            <p className="text-white/50 text-lg">06110 Halle (Saale)</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold text-blue-500">Kontakt</h1>
            <p className="text-white/50 text-lg">Telefon: 0173 475 91 22</p>
            <p className="text-white/50 text-lg">
              E-Mail: abbosbekanvarjonov8@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Imprint;
