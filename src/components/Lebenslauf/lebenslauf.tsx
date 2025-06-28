import { useState } from 'react';
import Button from '../UI/Button';
import Ausbildung from './Ausbilding';
import Fähigkeiten from './Fähigkeit';
import UberMich from './uberMich';

function Lebenslauf() {
  const [activeSection, setActiveSection] = useState<string>('ausbildung');

  return (
    <div className="flex  flex-col   items-center">
      <div className="container flex flex-col custom-padding  gap-10">
        <div className="flex w-full flex-col 2xl:flex-row 2xl:items-start  items-center pt-20 gap-20">
          <div className="h-auto w-full   rounded-md flex flex-col max-w-[500px] max-auto xl:max-0 gap-8">
            <Button
              onClick={() => setActiveSection('ausbildung')}
              title="Ausbildung"
              className={`inline-flex items-center justify-center w-full font-bold text-xl text-white px-4 py-3 rounded-md cursor-pointer
                 ${
                   activeSection === 'ausbildung'
                     ? 'bg-blue-500'
                     : 'bg-slate-800'
                 }
                 hover:bg-blue-500 transition-colors duration-300`}
            />

            <Button
              onClick={() => setActiveSection('fähigkeiten')}
              title="Fähigkeiten"
              className={`inline-flex items-center justify-center w-full font-bold text-xl text-white px-6 py-3 rounded-md cursor-pointer
                ${
                  activeSection === 'fähigkeiten'
                    ? 'bg-blue-500'
                    : 'bg-slate-800'
                }
                hover:bg-blue-500 transition-colors duration-300`}
            />
            <Button
              onClick={() => setActiveSection('ubermich')}
              title="Über mich"
              className={`inline-flex items-center justify-center w-full font-bold text-xl  text-white px-6 py-3 rounded-md cursor-pointer
                    ${
                      activeSection === 'ubermich'
                        ? 'bg-blue-500'
                        : 'bg-slate-800'
                    }
             hover:bg-blue-500 transition-colors duration-300`}
            />
          </div>
          <div className="">
            {activeSection === 'ausbildung' && <Ausbildung></Ausbildung>}
            {activeSection === 'fähigkeiten' && <Fähigkeiten></Fähigkeiten>}
            {activeSection === 'ubermich' && <UberMich></UberMich>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lebenslauf;
