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
      className={`fixed xl:hidden top-0 right-0 h-full w-70 flex flex-col items-center p-10  gap-20 bg-slate-800 transform transition-transform duration-400 z-50 ${
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
      <div className="flex flex-col items-center gap-30 ">
        <h1 className="font-semibold text-3xl">
          Abbosbek <span className="text-blue-500">.</span>
        </h1>
        <ul className="flex flex-col items-center gap-10">
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/'}
              onClick={onClose}
              className={activeLinksClass}
            >
              StartSeite
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/lebenslauf'}
              onClick={onClose}
              className={activeLinksClass}
            >
              Lebenslauf
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/projekte'}
              onClick={onClose}
              className={activeLinksClass}
            >
              Projekte
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Abbosbek-Anvarjonov/kontakt'}
              onClick={onClose}
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
