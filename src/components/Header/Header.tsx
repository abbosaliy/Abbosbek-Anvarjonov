import { useState } from 'react';
import MobileMenu from './Navigation/MobilNavi';
import DesktopNavi from './Navigation/DesktopNavi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="flex  items-center justify-between">
        <h1 className="font-semibold text-4xl ">
          Abbosbek<span className="text-blue-500">.</span>
        </h1>
        <DesktopNavi />
        <button
          onClick={() => setMenuOpen(true)}
          className="xl:hidden flex flex-col gap-2 hover:cursor-pointer"
        >
          <span className="w-8 h-0.5 bg-sky-500"></span>
          <span className="w-5 h-0.5 bg-sky-500"></span>{' '}
          <span className="w-8 h-0.5 bg-sky-500"></span>
        </button>
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        ></MobileMenu>
      </div>
    </header>
  );
}
export default Header;
