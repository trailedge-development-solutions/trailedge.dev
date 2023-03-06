import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className='mx-40 my-6'>
      <h2 className='pl-10 py-8 text-3xl text-emerald-400 font-bold'>Work with us</h2>

      <div className='flex justify-center align-center'>
	<div className='grid grid-cols-2'>
	  <div className='flex shadow-xl'>
	    <div className='rounded-l-lg bg-emerald-600 py-4 px-2'>
	      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<rect x="2" y="4" width="20" height="16" rx="2"></rect>
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
	      </svg>
	    </div>
	    <div className='rounded-r-lg bg-emerald-400 py-4 px-2'>
	      <a className='text-white text-lg'>team@trailedge.dev</a>
	    </div>
	  </div>
	  
	  <div className='flex'>
	    <div>
	      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
	      </svg>
	    </div>
	    <div className=''>
	      <a className=''>(804)516-5073</a>
	    </div>
	  </div>

	  <div className='text-gray-400 p-6 xl:p-8'>
	    <input
	      className=''
	      placeholder='Name'
	    />

	  </div>
	</div>
      </div>
    </div>
  );
}
