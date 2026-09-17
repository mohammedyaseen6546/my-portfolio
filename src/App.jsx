import React, { useEffect } from 'react'
import { Header } from './Header'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Hireme } from './Hireme'
import Footer from './Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './Skills'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Hireme />
      <Footer />
    </>
  )
}

export default App