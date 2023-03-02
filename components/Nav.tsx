import { motion } from 'framer-motion';

export default function Nav() {
  return (
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <motion.a
	      href="#"
	      className="-m-1 p-4"
	      initial={{
		opacity: 0,
		translateX: '-50vw',
		rotate: 10
	      }}
              animate={{
	        opacity: 1,
	        translateX: 0,
		rotate: 0
              }}
	    >
              <img className="h-14" src="/images/logo-full.png" alt="Trailedge" />
            </motion.a>
          </div>
          {/*<div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>*/}
          <div className="hidden lg:flex lg:gap-x-12"/>
	  {/*Add motion here:*/}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/*<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>*/}
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-emerald-400 hover:to-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
  );
}
