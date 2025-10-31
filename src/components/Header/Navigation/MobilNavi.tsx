import { HiOutlineX } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed xl:hidden top-0 right-0 h-[100vh] w-70 flex flex-col items-center p-10  gap-20 bg-slate-800 transform transition-transform duration-400 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="self-end ">
        <button
          onClick={onClose}
          className="text-blue-500 cursor-pointer  "
        >
          <HiOutlineX className="w-10 h-10" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-30 ">
        <h1 className="font-semibold text-3xl">
          Abbosbek <span className="text-blue-500">.</span>
        </h1>
        <ul className="flex flex-col items-center gap-10">
          <HashLink
            to="#hero"
            onClick={onClose}
            className="relative group text-xl duration-300 cursor-pointer"
          >
            <span className="group-hover:text-blue-500">StartSeite</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>

          <HashLink
            to="#lebenslauf"
            className="relative group text-xl duration-300 cursor-pointer"
            onClick={onClose}
          >
            <span className="group-hover:text-blue-500">Lebenslauf</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>

          <HashLink
            to="#projekte"
            className="relative group text-xl duration-300 cursor-pointer"
            onClick={onClose}
          >
            <span className="group-hover:text-blue-500"> Projekte</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>

          <HashLink
            to="#kontakt"
            className="relative group text-xl duration-300 cursor-pointer"
            onClick={onClose}
          >
            <span className="group-hover:text-blue-500"> Kontakt</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
