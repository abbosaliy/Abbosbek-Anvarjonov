import { useState } from 'react';
import Button from '../UI/Button';
import Datenschutsz from '../UI/DatenShutz';
import Impressum from '../UI/Impressum';

function Footer() {
  const [openImpressum, setOpenImpressum] = useState(false);
  const [openDatenschutsz, setopenDatenschutsz] = useState(false);
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row gap-5   ">
      <Button
        onClick={() => setOpenImpressum(true)}
        title=" IMPRESSUM"
        className="border-2  cursor-pointer rounded-full border-blue-500  px-15 py-3  xl:px-20 text-lg hover:bg-blue-500 hover:text-slate-950 transition-all whitespace-nowrap duration-300 font-bold "
      />

      {openImpressum && <Impressum onclose={() => setOpenImpressum(false)} />}

      <Button
        onClick={() => setopenDatenschutsz(true)}
        title="DATENSCHUTZ"
        className="border-2 cursor-pointer rounded-full border-blue-500  px-13 py-3  xl:px-20 text-lg hover:bg-blue-500 hover:text-slate-950 transition-all duration-300 font-bold "
      />
      {openDatenschutsz && (
        <Datenschutsz onclose={() => setopenDatenschutsz(false)} />
      )}
    </div>
  );
}

export default Footer;
