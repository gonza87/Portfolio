import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { LuMonitorStop } from "react-icons/lu";
import { CiServer } from "react-icons/ci";
import { PiToolboxFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import "./App.css";

function App() {
  const email = "gonzalo.viglioni@gmail.com";
  const subject = "Asunto del correo"; // Puedes personalizar el asunto del correo si lo deseas
  const body = "Contenido del correo"; // Puedes personalizar el cuerpo del correo si lo deseas
  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo electrónico predeterminado del usuario
    window.open(mailtoLink);
  };

  const handleCopyEmail = async () => {
    try {
      // Utilizar la Clipboard API para copiar el contenido al portapapeles
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Error al copiar el correo al portapapeles:", error);
    }
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const [projectHovered, setProjectHovered] = useState(null);
  const webGitHub = "https://github.com/gonza87";
  const whatsapp = "https://wa.me/+59898602073";
  const linkedin = "https://www.linkedin.com/in/gonzaloviglioni/";
  return (
    <>
      <div className="header container-fluid">
        <div className="container nav d-flex justify-content-between">
          <h1 className="align-self-center textNav">{"<Gwd>"}</h1>
          <div className="align-self-center">
            <TfiMenuAlt className="iconoMenu" size={30} onClick={toggleMenu} />
            {menuVisible && (
              <div className="menu-desplegable">
                {/* Contenido del menú desplegable */}
                <div>
                  <a href="#proyectos">Portfolio</a>
                </div>
                <div>
                  <a href="#contacto">Contacto</a>
                </div>
                <div>
                  <a href="#skills">Skills</a>
                </div>

                {/* Agrega más elementos según sea necesario */}
              </div>
            )}
          </div>
        </div>
      </div>
      <main className="container main">
        <section className="mt-5">
          <div className="row">
            <div className="col-6">
              <div className="contAbout">
                <p className="titleAbout">Me llamo Gonzalo</p>

                <p className="fs-5 textAbout">
                  Soy desarrollador Web Full Stack con fuerte curiosidad en el
                  diseño y programación.
                  <p className="fs-5 textAbout">
                    Estoy abierto a nuevas oportunidades y colaboraciones ¡no
                    dudes en contactarme!
                  </p>
                </p>
                <div className="conContactos">
                  <button className="btnLinkedin">Linkedin</button>
                  <button className="btnContacto ms-2">Contacto</button>
                  <button className="btnGitHub ms-2">GitHub</button>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img className="imgPerfil" src="/img/perfil6.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="proyectos" className="proyectos">
          <p className="fs-2">Mis Proyectos</p>
          <div className="d-flex flex-wrap justify-content-between ">
            <Card className="cardProyectos" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/gif/HackShop.gif" />
              <Card.Body>
                <Card.Title className="titleCardProyect">HackShop</Card.Title>
                <Card.Text className="textCardProyect d-flex">
                  <p>react</p> <p>node</p> <p>express</p>
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex justify-content-center">
                <Card.Link href="#">
                  <FaGithub className="linksCardProyect" size={25} />
                </Card.Link>
                <Card.Link href="#">
                  <FaLink className="linksCardProyect" size={25} />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="cardProyectos" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/gif/Hackflix.gif" />
              <Card.Body>
                <Card.Title className="titleCardProyect">HackFlix</Card.Title>
                <Card.Text className="textCardProyect d-flex">
                  <p>react</p>
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex justify-content-center">
                <Card.Link href="#">
                  <FaGithub className="linksCardProyect" size={25} />
                </Card.Link>
                <Card.Link href="#">
                  <FaLink className="linksCardProyect" size={25} />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="cardProyectos" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/gif/twitter.gif" />
              <Card.Body>
                <Card.Title className="titleCardProyect">Twitter</Card.Title>
                <Card.Text className="textCardProyect d-flex">
                  <p>react</p> <p>node</p> <p>express</p>
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex justify-content-center">
                <Card.Link href="#">
                  <FaGithub className="linksCardProyect" size={25} />
                </Card.Link>
                <Card.Link href="#">
                  <FaLink className="linksCardProyect" size={25} />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="cardProyectos" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/gif/TodoSurfJs.gif" />
              <Card.Body>
                <Card.Title className="titleCardProyect">TodoSurf</Card.Title>
                <Card.Text className="textCardProyect d-flex">
                  <p>javascript</p> <p>html</p> <p>css</p>
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex justify-content-center">
                <Card.Link href="#">
                  <FaGithub className="linksCardProyect" size={25} />
                </Card.Link>
                <Card.Link href="#">
                  <FaLink className="linksCardProyect" size={25} />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="cardProyectos" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/gif/Todosurf.gif" />
              <Card.Body>
                <Card.Title className="titleCardProyect">TodoSurf</Card.Title>
                <Card.Text className="textCardProyect d-flex">
                  <p>javascript</p> <p>html</p> <p>sass</p>
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex justify-content-center">
                <Card.Link href="#">
                  <FaGithub className="linksCardProyect" size={25} />
                </Card.Link>
                <Card.Link href="#">
                  <FaLink className="linksCardProyect" size={25} />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="cardProyectos" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/maquetado.JPG" />
              <Card.Body>
                <Card.Title className="titleCardProyect">Maquetado</Card.Title>
                <Card.Text className="textCardProyect d-flex">
                  <p>html</p> <p>css</p>
                </Card.Text>
              </Card.Body>

              <Card.Body className="d-flex justify-content-center">
                <Card.Link href="#">
                  <FaGithub className="linksCardProyect" size={25} />
                </Card.Link>
                <Card.Link href="#">
                  <FaLink className="linksCardProyect" size={25} />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card
              className="cardProyectos"
              style={{ width: "18rem", visibility: "hidden" }}
            ></Card>
            <Card
              className="cardProyectos"
              style={{ width: "18rem", visibility: "hidden" }}
            ></Card>
          </div>
        </section>
        <section id="contacto" className="contacto">
          <p className="fs-2">Contacto</p>
          <div className="contcamposContactos fs-5">
            <div className="d-flex align-items-baseline">
              <div>
                <MdOutlineEmail className="logoEmail me-2" />
              </div>
              <p>gonzalo.viglioni@gmail.com</p>
              <div className="ms-2">
                <button className="btnSendEmail" onClick={handleSendEmail}>
                  <VscSend />
                </button>
                <button className="btnCopyEmail" onClick={handleCopyEmail}>
                  <IoCopyOutline />
                </button>
              </div>
            </div>

            <div className="d-flex align-items-baseline">
              <div>
                <Link to={linkedin} style={{ textDecoration: "none" }}>
                  <FaLinkedinIn className="logoLinkedin me-2" />
                </Link>
              </div>
              <p>in/gonzaloviglioni/</p>
            </div>

            <div className="d-flex align-items-baseline">
              <div>
                <Link to={whatsapp} style={{ textDecoration: "none" }}>
                  <FaWhatsapp className="logoWhatsapp me-2" />
                </Link>
              </div>
              <p>+598 60 20 73</p>
            </div>

            <div className="d-flex align-items-baseline">
              <div>
                <Link to={webGitHub} style={{ textDecoration: "none" }}>
                  <FaGithub className="linksCardProyect me-2" />
                </Link>
              </div>
              <p>gonza87</p>
            </div>
          </div>
        </section>
        <section id="skills" className="skills">
          <p className="fs-2">Skills</p>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <Card
                className="cardSkills cardSkillsFront"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="titleCardProyect d-flex align-items-baseline">
                    <div>
                      <img
                        className="logoFrontent"
                        src="./img/logoFrontend.png"
                        alt=""
                      />
                    </div>

                    <p>Frontend</p>
                    {/* <LuMonitorStop className="logoFrontent" /> Frontend */}
                  </Card.Title>
                  <Card.Text className="textCardProyect d-flex flex-wrap">
                    <p>html</p>
                    <p>css</p>
                    <p>javascript</p>
                    <p>react</p>
                    <p>sass</p>
                    <p>bootstrap</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Card
                className="cardSkills cardSkillsBack"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="titleCardProyect d-flex align-items-baseline">
                    <div>
                      <img
                        className="logoBackend"
                        src="./img/logoBackend.png"
                        alt=""
                      />
                    </div>
                    <p>Backend</p>

                    {/* <CiServer className="logoBackend" /> Backend */}
                  </Card.Title>
                  <Card.Text className="textCardProyect d-flex flex-wrap ">
                    <p>c#</p>
                    <p>node js</p>
                    <p>ejs</p>
                    <p>express</p>
                    <p>mysql</p>
                    <p>sql</p>
                    <p>mongodb</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Card
                className="cardSkills cardSkillsTool"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="titleCardProyect d-flex align-items-baseline">
                    <div>
                      <img
                        className="logoTool "
                        src="./img/logoTools.png"
                        alt=""
                      />
                    </div>

                    <p>Tools</p>

                    {/* <PiToolboxFill className="logoTool" /> Tool */}
                  </Card.Title>
                  <Card.Text className="textCardProyect d-flex flex-wrap ">
                    <p>VScode</p>
                    <p>Figma</p>
                    <p>GitHub</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer text-center">
        <p>© Copyright 2024 | GonzaloWebDev</p>
      </footer>
    </>
  );
}

export default App;
