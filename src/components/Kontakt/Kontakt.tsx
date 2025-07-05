import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { FaMapLocation } from 'react-icons/fa6';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Kontakt() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_31avvlz', 'template_fh7vbkt', form.current, {
        publicKey: 'nz8d6xs1aCuNoEDMn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Nachricht wurde erfolgreich gesendet!');
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Fehler beim Senden der Nachricht. Bitte erneuet versuchen.');
        }
      );
  };

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

        <div className="xl:w-[54%] flex flex-col items-start rounded-md bg-slate-800 p-4 gap-5 ">
          <h1 className="text-3xl text-blue-500">
            Lassen Sie uns zusammenarbeiten.
          </h1>
          <p className="text-slate-400 text-xl">
            Ich freue mich auf Ihre Nachricht! Ob Sie Fragen zu meinen
            Dienstleistungen haben, an einer Zusammenarbeit interessiert sind
            oder einfach nur Hallo sagen möchten – zögern Sie nicht, mich zu
            kontaktieren.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex w-full flex-col  gap-8"
          >
            <div className="w-full flex flex-col md:flex-row gap-5 items-center">
              <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                <label>
                  <input
                    type="text"
                    placeholder="Vorname"
                    name="user_vorname"
                    className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </label>

                <label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Nachname"
                    className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-5 items-center">
              <label>
                <input
                  type="text"
                  name="user_email"
                  placeholder="E-Mail Adresse"
                  className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
                  required
                />
              </label>

              <label>
                <input
                  type="text"
                  name="user_number"
                  placeholder="Telefonnummer"
                  className="w-full rounded-md text-lg bg-slate-900 p-2 border border-slate-800 focus:border-blue-500 focus:outline-none"
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label>
                <textarea
                  className="w-full bg-slate-900 p-2 text-lg min-h-[120px] resize-y  border border-slate-800 focus:border-blue-500 focus:outline-none"
                  placeholder="Nachricht"
                  name="message"
                  required
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              className=" py-2 px-8 border-blue-500 border-2  cursor-pointer rounded-full  hover:bg-blue-500 hover:text-slate-950 transition-all duration-300 font-extralight"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
