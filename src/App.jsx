import React, { useEffect } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Qualification from "./components/qualification/Qualification";

const App = () => {
  useEffect(() => {
    // Scroll to top when page refreshes
    window.scrollTo({ top: 0, behavior: "auto" });

    // Optional: Remove hash if any
    if (window.location.hash) {
      // Use pushState to clear the hash without reloading
      if (window.history && window.history.pushState) {
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Qualification />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
