import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import ReactIcon from './ReactIcon';
import TwIcon from './TwIcon';
import NextIcon from './NextIcon';
import TsIcon from './TsIcon';
import FmIcon from './FmIcon';

const icons1 = [
  ReactIcon,
  TwIcon,
  NextIcon
];

const icons2 = [
  TsIcon,
  FmIcon
];

export default function StackHive() {
  return (
    <div className='-mt-14 scale-75'>
      <div className='flex justify-center'>
	{icons1.map(Icon => <div className='px-10'>
	  <Tilt>
	    <Icon/>
	  </Tilt>
	</div>)}
      </div>
      <div className='flex justify-center py-2'>
	{icons2.map(Icon => <div className='px-10'>
	  <Tilt>
	    <Icon/>
	  </Tilt>
	</div>)}
      </div>
    </div>
  );
}
