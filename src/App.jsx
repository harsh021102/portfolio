import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import {ellipse} from '../src/utils/images'
import Description from "./components/Description";
import Projects from '../src/components/Projects'

function App() {
  return (
    <section className="h-full w-full bg-black">
      <img src={ellipse} alt='ellipse' className="absolute w-full h-2/6 md:h-3/6 bg-contain bg-no-repeat" />
      <Navbar/>
      <Banner/>
      <Description/>
      <Projects/>
    </section>
  );
}

export default App;
