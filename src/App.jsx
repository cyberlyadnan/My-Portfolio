import { BrowserRouter } from "react-router-dom";

// import { About, Contact, Experience, Feedbacks, Hero, NavbarTech, Works, StarsCanvas } from "./components";
import { StarsCanvas } from "./components";

import React, { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
