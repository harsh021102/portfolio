import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import {ellipse} from '../src/utils/images'
import Description from "./components/Description";
import Projects from '../src/components/Projects'
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const description = useRef(null)
  const project = useRef(null)
  const scrollToSection = (ref) =>{
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <section className="h-full w-full bg-black">
      <img src={ellipse} alt='ellipse' className="absolute w-full h-2/6 md:h-3/6 bg-contain bg-no-repeat" />
      <Navbar description={description} project={project} scrollToSection={scrollToSection}/>
      <Banner/>
      <Description ref={description}/>
      <Projects ref={project}/>
      <Footer/>
    </section>
  );
}

export default App;
