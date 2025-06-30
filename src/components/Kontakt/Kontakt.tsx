import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { FaMapLocation } from 'react-icons/fa6';

function Kontakt() {
  return (
    <div className="container ">
      <div className="flex flex-col xl:items-center xl:flex-row xl:justify-between gap-10 ">
        <div className="flex flex-col xl:order-2 gap-15">
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="bg-slate-800 rounded-md p-2">
                <BsFillTelephoneFill className="w-10 h-10 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <p className="text-slate-400 text-xl">Telefon</p>
                <p className="text-xl">(+49)1734759122</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="bg-slate-800 rounded-md p-2">
                <HiMail className="w-10 h-10 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <p className="text-slate-400 text-xl">E-Mail</p>
                <p className="text-xl break-all">
                  abbosbekanvarjonov8@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="bg-slate-800 rounded-md p-2">
                <FaMapLocation className="w-10 h-10 text-blue-500" />
              </div>

              <div className="flex flex-col">
                <p className="text-slate-400 text-xl">Adresse</p>
                <p className="text-xl">Halle (Saale), Deutschland</p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-[54%] flex flex-col items-start rounded-md bg-slate-800 p-6 gap-5 ">
          <h1 className="text-4xl text-blue-500">
            Lassen Sie uns zusammenarbeiten.
          </h1>
          <p className="text-slate-400 text-xl">
            Ich freue mich auf Ihre Nachricht! Ob Sie Fragen zu meinen
            Dienstleistungen haben, an einer Zusammenarbeit interessiert sind
            oder einfach nur Hallo sagen möchten – zögern Sie nicht, mich zu
            kontaktieren.
          </p>

          <div className="flex w-full flex-col gap-8">
            <div className="w-full flex flex-col md:flex-row gap-5 items-center">
              <input
                type="text"
                placeholder="Vorname"
                className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Nachname"
                className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5 items-center">
              <input
                type="text"
                placeholder="E-Mail Adresse"
                className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Telefonnummer"
                className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="w-full">
              <textarea
                className="w-full bg-slate-900 p-2 text-lg min-h-[120px] resize-y  border border-slate-800 focus:border-blue-500 focus:outline-none"
                placeholder="Nachricht"
              ></textarea>
            </div>
          </div>
          <button className=" py-2 px-8 border-blue-500 border-2  cursor-pointer rounded-full  hover:bg-blue-500 hover:text-slate-950 transition-all duration-300 font-extralight">
            Nachricht senden
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
