import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full h-15 flex justify-center items-center  gap-10  bg-slate-900 ">
      <div className="mx-auto text-center space-x-8">
        <Link
          to={'/imprint'}
          className="text-white/50 text-lg  hover:text-blue-500"
        >
          Impressum
        </Link>
        <Link
          to={'/privacy-policy'}
          className="text-white/50 text-lg hover:text-blue-500 "
        >
          Datenschutz
        </Link>
      </div>
    </div>
  );
}

export default Footer;
