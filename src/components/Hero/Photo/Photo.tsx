'use client';
import { motion } from 'framer-motion';

function Photo() {
  return (
    <div className="h-full w-full relative">
      <motion.div>
        {/*image*/}
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/person.png"
            alt="person"
            className="object-contain  w-full h-full rounded-full"
          />
        </motion.div>

        {/*circle*/}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#3B82F6"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
