import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { FaMapLocation } from 'react-icons/fa6';

function Kontakt() {
  return (
    <div className="flex  flex-col  items-center">
      <div className="container flex-col ">
        <div className="flex flex-col 2xl:items-center 2xl:flex-row 2xl:justify-between gap-15 2xl:gap-30 pt-30  pb-10">
          <div className="flex flex-col 2xl:order-2 gap-15">
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div className="bg-slate-800 rounded-md p-3">
                  <BsFillTelephoneFill className="w-10 h-10 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/80 text-xl">Telefon</p>
                  <p className="text-2xl">(+49)1734759122</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div className="bg-slate-800 rounded-md p-3">
                  <HiMail className="w-10 h-10 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/80 text-xl">E-Mail</p>
                  <p className="text-2xl">abbosbekanvarjonov8@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div className="bg-slate-800 rounded-md p-3">
                  <FaMapLocation className="w-10 h-10 text-blue-500" />
                </div>

                <div className="flex flex-col">
                  <p className="text-white/80 text-xl">Adresse</p>
                  <p className="text-2xl">Halle (Saale), Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start bg-slate-800 p-6 gap-8 ">
            <h1 className="text-4xl text-blue-500">
              Lassen Sie uns <br /> zusammenarbeiten.
            </h1>
            <p className="text-white/80 text-xl">
              Ich freue mich auf Ihre Nachricht! Ob Sie Fragen zu meinen
              Dienstleistungen haben, an einer Zusammenarbeit interessiert sind
              oder einfach nur Hallo sagen möchten – zögern Sie nicht, mich zu
              kontaktieren.
            </p>

            <div className="flex w-full flex-col gap-15">
              <div className="w-full flex flex-col xl:flex-row gap-12 items-center">
                <input
                  type="text"
                  placeholder="Vorname"
                  className="w-full rounded-md text-xl bg-slate-900 p-4 border border-slate-800 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Nachname"
                  className="w-full rounded-md text-xl bg-slate-900 p-4 border border-slate-800 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col xl:flex-row gap-12 items-center">
                <input
                  type="text"
                  placeholder="E-Mail Adresse"
                  className="w-full rounded-md text-xl bg-slate-900 p-4 border border-slate-800 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Telefonnummer"
                  className="w-full rounded-md text-xl bg-slate-900 p-4 border border-slate-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="w-full">
                <textarea
                  className="w-full bg-slate-900 p-2 text-xl min-h-[200px] resize-y  border border-slate-800 focus:border-blue-500 focus:outline-none"
                  placeholder="Nachricht"
                ></textarea>
              </div>
            </div>
            <button className=" py-4 px-8 border-blue-500 border-2  cursor-pointer rounded-full  hover:bg-blue-500 hover:text-slate-950 transition-all duration-300 font-extralight">
              Nachricht senden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
