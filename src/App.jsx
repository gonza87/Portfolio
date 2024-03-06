// import React, { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
// import { FaLink } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { VscSend } from "react-icons/vsc";
// import { IoCopyOutline } from "react-icons/io5";
// import { LuMonitorCheck } from "react-icons/lu";
import "./App.css";

function App() {
  // const whatsapp = "https://wa.me/+59898602073";
  // const linkedin = "https://www.linkedin.com/in/gonzaloviglioni/";
  // const webGitHub = "https://github.com/gonza87";
  return (
    <>
      <div className="header container-fluid">
        <NavBar />
      </div>
      <main className="container main">
        <section className="mt-5 about">
          <About />
        </section>
        <section id="proyectos" className="proyectos">
          <Proyects />
        </section>
        <section id="contacto" className="contacto">
          <Contact />
        </section>
        <section id="skills" className="skills">
          <Skills />
        </section>
      </main>

      <footer className="footer text-center">
        <p>© Copyright 2024 | GonzaloWebDev</p>
      </footer>
    </>
  );
}

export default App;
