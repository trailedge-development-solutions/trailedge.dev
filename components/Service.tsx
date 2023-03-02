import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function Service({ title, des }) {
  return (
    <Tilt>
      <div className='rounded-xl bg-white/20 flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-100 shadow xl:p-8'>
	{/*image icon clipart*/}
	<h3 className='text-gray-400 text-2xl font-xl'>{title}</h3>
	<p className='text-lg text-gray-300 pt-6 pb-10'>{des}</p>
      </div>
    </Tilt>
  );
}
