import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/heroSection/heroSection";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Splash from "./components/Splash/Splash";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  //splash screen

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading your app data (you can replace this with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when your app is ready
    }, 2500); // Adjust the delay as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          <Navbar window={windowWidth} />
          <HeroSection window={windowWidth} />
          <hr></hr>
          <Technologies />
          <hr></hr>
          <Projects />
          <hr></hr>
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
