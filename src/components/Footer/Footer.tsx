import { useState } from 'react';

import Button from '../UI/Button';

import Datenschutsz from '../UI/DatenShutz';
import Impressum from '../UI/Impressum';

function Footer() {
  const [show, setShow] = useState(false);
  const [hov, setHov] = useState(false);
  return (
    <div className=" flex flex-col justify-center items-center 2xl:flex-row gap-5   xl:pt-10">
      <Button
        onClick={() => setShow(!show)}
        title=" IMPRESSUM"
        className="border-2  cursor-pointer rounded-full border-blue-500  px-15 py-3 xl:py-6 xl:px-30 xl:text-lg hover:bg-blue-500 hover:text-slate-950 transition-all whitespace-nowrap duration-300 font-bold text-sm"
      />

      {show && <Impressum />}

      <Button
        onClick={() => setHov(!hov)}
        title="DATENSCHUTZ"
        className="border-2 cursor-pointer rounded-full border-blue-500  px-13 py-3 xl:py-6 xl:px-30 xl:text-lg hover:bg-blue-500 hover:text-slate-950 transition-all duration-300 font-bold text-sm"
      />
      {hov && <Datenschutsz />}
    </div>
  );
}

export default Footer;
