import NavMobile from "./components/NavMobile";
import Hero from "./components/Hero";
import Films from "./components/Films";
import Stills from "./components/Stills";
import Photo from "./components/Photo";
import Contact from "./components/Contact";
import NavTitle from "./components/NavTitle";
import StillsMobile from "./components/StillsMobile";
import "./components/Embla/css/embla.css";
import Skrollr from "./components/Skrollr/Skroller";
const OPTIONS = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
console.log(SLIDES);

function App() {
  return (
    <div className="App">
      <NavMobile></NavMobile>
      <NavTitle></NavTitle>
      <Hero></Hero>
      <Films slides={SLIDES} options={OPTIONS}></Films>
      <Stills></Stills>
      <StillsMobile slides={SLIDES} options={OPTIONS}></StillsMobile>
      <Photo></Photo>
      <Contact></Contact>
    </div>
  );
}

export default App;
