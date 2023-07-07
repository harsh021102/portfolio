import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import {ellipse} from '../src/utils/images'
import Description from "./components/Description";
import Projects from '../src/components/Projects'
import Footer from "./components/Footer";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion"

const imgVariant = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      type: 'tween',
    }
  }
}

function App() {
  const description = useRef(null)
  const project = useRef(null)
  const scrollToSection = (ref) =>{
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <section className="h-full w-full bg-black">
      <motion.img src={ellipse} alt='ellipse' className="absolute w-full h-2/6 md:h-3/6 bg-contain bg-no-repeat" 
      variants={imgVariant}
      initial="hidden"
      animate="visible"
      />
      <Navbar description={description} project={project} scrollToSection={scrollToSection}/>
      <Banner/>
      <Description ref={description}/>
      <Projects ref={project}/>
      <Footer/>
    </section>
  );
}

export default App;
