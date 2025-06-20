import React from "react";
import "./index.css"; // or App.css
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
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh", overflowX: "hidden" }}>
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
    </div>
  );
};

export default App;
