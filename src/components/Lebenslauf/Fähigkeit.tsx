import { BiLogoTypescript } from 'react-icons/bi';
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMui, SiShadcnui, SiTailwindcss, SiVite } from 'react-icons/si';

function Fähigkeiten() {
  return (
    <div className="flex flex-col  min-h-[70vh] gap-6">
      <div className="flex flex-col items-center xl:items-start text-center gap-8 ">
        <h1 className="font-semibold text-4xl ">Meine Fähigkeiten</h1>
        <p className="text-slate-400 font-mono text-xl xl:text-start  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quidem accusantium et, sit neque vitae sunt tempora est? Illum, enim
          inventore. Tempora deserunt perspiciatis harum error molestias
          repellendus aut fuga? Ut asperiores sit animi nobis hic tempore nemo
          aliquam perspiciatis delectus deleniti temporibus excepturi adipisci,
          est ipsa totam repudiandae corrupti recusandae molestias odit itaque
        </p>
      </div>

      <div className="max-h-[500px]  overscroll-contain overflow-y-auto grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6    pt-15 ">
        <div className=" relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800 col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-4 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            React
          </div>
          <FaReact className="w-20 h-20"></FaReact>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800 col-span-1 h-40 ">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-4 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            JavaScript
          </div>
          <IoLogoJavascript className="w-20 h-20" />
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800 col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-4 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            TypeScript
          </div>
          <BiLogoTypescript className="w-20 h-20"></BiLogoTypescript>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800 col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CSS
          </div>
          <FaCss3 className="w-20 h-20"></FaCss3>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            SASS
          </div>
          <FaSass className="w-20 h-20"></FaSass>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800 col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            TailwindCss
          </div>
          <SiTailwindcss className="w-20 h-20"></SiTailwindcss>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Git
          </div>
          <FaGit className="w-20 h-20"></FaGit>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GitHub
          </div>
          <FaGithub className="w-20 h-20"></FaGithub>
        </div>
        <div className="relative group  flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            HTML
          </div>
          <FaHtml5 className="w-20 h-20"></FaHtml5>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Vite
          </div>
          <SiVite className="w-20 h-20"></SiVite>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            MaterialUI
          </div>
          <SiMui className="w-20 h-20"></SiMui>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Bootstrap
          </div>
          <FaBootstrap className="w-20 h-20"></FaBootstrap>
        </div>
        <div className="relative group flex items-center justify-center rounded-md hover:text-blue-500 duration-300 bg-slate-800  col-span-1 h-40">
          <div className="absolute bottom-full  mb-2 text-black text-xl px-6 py-2 bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Shadcnui
          </div>
          <SiShadcnui className="w-20 h-20"></SiShadcnui>
        </div>
      </div>
    </div>
  );
}

export default Fähigkeiten;
