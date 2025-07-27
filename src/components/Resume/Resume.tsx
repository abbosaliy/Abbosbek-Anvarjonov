import { useState } from 'react';
import Button from '../UI/Button';
import Education from './Education';
import Skills from './Skills';
import AboutMe from './AboutMe';

function Resume() {
  const [activeSection, setActiveSection] = useState<string>('education');

  return (
    <div className="container">
      <div className="flex w-full flex-col xl:flex-row xl:items-start  items-center gap-20 pt-15">
        <div className=" w-full max-w-[380px]     flex flex-col   gap-8">
          <Button
            onClick={() => setActiveSection('education')}
            title="Ausbildung"
            className={`inline-flex items-center justify-center w-full font-bold text-xl text-white px-4 py-3 rounded-md cursor-pointer
                 ${
                   activeSection === 'education'
                     ? 'bg-blue-500'
                     : 'bg-slate-800'
                 }
                 hover:bg-blue-500 transition-colors duration-300`}
          />

          <Button
            onClick={() => setActiveSection('skills')}
            title="Fähigkeiten"
            className={`inline-flex items-center justify-center w-full font-bold text-xl text-white px-6 py-3 rounded-md cursor-pointer
                ${activeSection === 'skills' ? 'bg-blue-500' : 'bg-slate-800'}
                hover:bg-blue-500 transition-colors duration-300`}
          />
          <Button
            onClick={() => setActiveSection('aboutMe')}
            title="Über mich"
            className={`inline-flex items-center justify-center w-full font-bold text-xl  text-white px-6 py-3 rounded-md cursor-pointer
                    ${
                      activeSection === 'aboutMe'
                        ? 'bg-blue-500'
                        : 'bg-slate-800'
                    }
             hover:bg-blue-500 transition-colors duration-300`}
          />
        </div>
        <div className="w-full min-h-[70vh]">
          {activeSection === 'education' && <Education />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'aboutMe' && <AboutMe />}
        </div>
      </div>
    </div>
  );
}

export default Resume;
