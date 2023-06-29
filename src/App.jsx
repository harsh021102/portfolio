import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import {ellipse} from '../src/utils/images'

function App() {
  return (
    <section className="h-screen w-screen bg-black">
      <img src={ellipse} alt='ellipse' className="absolute w-full h-3/6 bg-contain bg-no-repeat border-2 border-blue-400" />
      <Navbar/>
      <Banner/>
    </section>
  );
}

export default App;
