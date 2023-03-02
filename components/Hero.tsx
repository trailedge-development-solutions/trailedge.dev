import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <main>
        <div className="relative px-6 isolate h-screen pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
	  <motion.div
	    className="text-left ml-6 max-w-2xl py-18 sm:py-30 lg:py-28"
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
	    {/*[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ???*/}
              <h1 className="ml-1 text-2xl text-indigo-500">
	        Your Edge in Web Development
              </h1>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Empowering businesses to <b className='font-bold bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'>blaze</b> their own trail on the wild web
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-emerald-400 hover:to-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's Talk
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
          </motion.div>

          <div className="relative mt-16 h-80 lg:mt-8">
	    <motion.div
	      initial={{
         	scale: 0.5,
		translateX: '50vw',
		opacity: 0,
		rotateZ: 10
	      }}
	      animate={{
		rotateX: 15,
                rotateY: 15,
		rotateZ: 0,
		translateX: 0,
		opacity: 1
	      }}
	      className='absolute -top-60 -left-60 max-w-none bg-[url(/images/wireframe.png)] w-[893px] h-[1016px]'
	    />
          </div>
        </div>
      </main>
    </>
  );
}
