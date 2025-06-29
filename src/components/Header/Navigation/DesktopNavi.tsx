import { NavLink } from 'react-router-dom';

const activeLinksClass = ({ isActive }: { isActive: boolean }): string =>
  `text-2xl ${
    isActive
      ? 'underline underline-offset-8 decoration-blue-500 decoration-2 '
      : ''
  }`;
function DesktopNavi() {
  return (
    <div className="hidden 2xl:block">
      <ul className="flex  items-center gap-15">
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
        <li>
          <NavLink
            to={'/Abbosbek-Anvarjonov/kontakt'}
            className="text-xl bg-blue-500 rounded-full p-4"
          >
            Hire me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNavi;
