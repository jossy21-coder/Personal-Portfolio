import { useState } from "react";
import LoadingAnimation from "./components/LoadingAnimation";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <LoadingAnimation onComplete={handleLoadingComplete} duration={3000} />
    );
  }

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
