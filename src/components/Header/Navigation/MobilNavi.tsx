import { HiOutlineX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const activeLinksClass = ({ isActive }: { isActive: boolean }): string =>
  `text-2xl ${
    isActive
      ? 'underline underline-offset-8 decoration-blue-500 decoration-2 '
      : ''
  }`;

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed    xl:hidden top-0 right-0 h-full w-80 flex flex-col items-center  p-10  gap-40 shadow-lg bg-slate-950 transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="self-end ">
        <button
          onClick={onClose}
          className="text-blue-500 cursor-pointer "
        >
          <HiOutlineX className="w-10 h-10" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-40 ">
        <h1 className="font-semibold text-4xl">
          Abbosbek <span className="text-blue-500">.</span>
        </h1>

        <ul className="flex flex-col items-center gap-10">
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/'}
              className={activeLinksClass}
            >
              StartSeite
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/lebenslauf'}
              className={activeLinksClass}
            >
              Lebenslauf
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/projekte'}
              className={activeLinksClass}
            >
              Projekte
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/kontakt'}
              className={activeLinksClass}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
