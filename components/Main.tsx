//import { Inter } from '@next/font/google'; // Font
//import styles from '@/styles/Home.module.css';

import Background from '../components/Background';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

//const inter = Inter({ subsets: ['latin'] }); // Font

export default function Main() {
  return (
    <div className="overflow-x-hidden isolate bg-white dark:bg-gray-700">
      <Background/>
      <Nav/>
      <Hero/>
      <Services/>
      <About/>
      <Stack/>
      <Contact/>
      <Footer/>
      
      {/*className={inter.className}*/}
    </div>
  );
};
