import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function SocialLinks() {
  return (
    <div className="flex items-center flex-col gap-5 xl:flex-row  xl:gap-10">
      <div className="flex items-center justify-center gap-6 ">
        <a
          href="https://github.com/abbosaliy"
          target="_blank"
          className="w-12 h-12 xl:w-15 xl:h-15 border border-blue-500 rounded-full  flex items-center justify-center  hover:bg-blue-500 text-base  text-blue-500 hover:text-black transition-all duration-300"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="w-12 h-12  xl:w-15 xl:h-15 border border-blue-500 rounded-full  flex items-center justify-center  hover:bg-blue-500 text-base  text-blue-500 hover:text-black transition-all duration-300"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="w-12 h-12 xl:w-15 xl:h-15 border border-blue-500 rounded-full  flex items-center justify-center  hover:bg-blue-500 text-base   text-blue-500 hover:text-black transition-all duration-300"
        >
          <HiMail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
