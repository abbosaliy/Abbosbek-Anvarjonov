import { HashLink } from 'react-router-hash-link';

function DesktopNavi() {
  return (
    <div className="hidden xl:block">
      <ul className="flex  items-center gap-15">
        <HashLink
          to="#hero"
          className="relative group text-xl duration-300 cursor-pointer"
        >
          <span className="group-hover:text-blue-500">StartSeite</span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </HashLink>

        <HashLink
          to="#lebenslauf"
          className="relative group text-xl duration-300 cursor-pointer"
        >
          <span className="group-hover:text-blue-500">Lebenslauf</span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </HashLink>

        <HashLink
          to="#projekte"
          className="relative group text-xl duration-300 cursor-pointer"
        >
          <span className="group-hover:text-blue-500">Projekte</span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </HashLink>

        <HashLink
          to="#kontakt"
          className="relative group text-xl duration-300 cursor-pointer"
        >
          <span className="group-hover:text-blue-500"> Kontakt</span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </HashLink>

        <HashLink
          to="#kontakt"
          className=" bg-blue-500 rounded-full p-4 hover:bg-blue-600 duration-300"
        >
          Hire me
        </HashLink>
      </ul>
    </div>
  );
}

export default DesktopNavi;
