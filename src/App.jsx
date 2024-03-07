
import NavBar from "./components/NavBar";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./App.css";

function App() {

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
        <p>© Copyright 2024 | GonzaloViglioniDev</p>
      </footer>
    </>
  );
}

export default App;
