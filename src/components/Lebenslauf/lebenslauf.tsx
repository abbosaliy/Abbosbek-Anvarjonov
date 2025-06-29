import { useState } from 'react';
import Button from '../UI/Button';
import Ausbildung from './Ausbilding';
import Fähigkeiten from './Fähigkeit';
import UberMich from './uberMich';

function Lebenslauf() {
  const [activeSection, setActiveSection] = useState<string>('ausbildung');

  return (
    <div className="container">
      <div className="flex w-full flex-col xl:flex-row xl:items-start  items-center gap-20">
        <div className=" w-full max-w-[380px]     flex flex-col   gap-8">
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
        <div className="w-full min-h-[70vh]">
          {activeSection === 'ausbildung' && <Ausbildung></Ausbildung>}
          {activeSection === 'fähigkeiten' && <Fähigkeiten></Fähigkeiten>}
          {activeSection === 'ubermich' && <UberMich></UberMich>}
        </div>
      </div>
    </div>
  );
}

export default Lebenslauf;
