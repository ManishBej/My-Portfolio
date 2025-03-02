import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Approach from "./components/Approach";

const BackgroundStars = ({ isMobile }) => {
  return (
    <div className={`fixed inset-0 z-[-1] pointer-events-none ${isMobile ? 'mobile-stars' : 'desktop-stars'}`}>
      <StarsCanvas />
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* Stars background for all sections except hero */}
        <div className="relative">
          <BackgroundStars isMobile={isMobile} />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Approach />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;