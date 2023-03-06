import { motion } from 'framer-motion';
import StackHive from './StackHive';

export default function Stack() {
  return (
    <>
      <div className='mx-40 mb-4'>
	<h2 className='pl-10 py-8 text-3xl text-emerald-400 font-bold'>Technologies</h2>
	<p className='text-gray-400 p-6 xl:p-8'>Trailedge offers full-cycle web development services. We can help you with everything from planning and designing your website to deploying it and keeping it running smoothly. Our team of experts will work with you to create a website that meets your specific needs and goals.</p>
      </div>
      <StackHive/>
    </>
  );
}
