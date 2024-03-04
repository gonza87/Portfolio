import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { TfiMenuAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import "./App.css";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const [projectHovered, setProjectHovered] = useState(null);

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

                <a href="#proyectos">Portfolio</a>

                <p>Contacto</p>
                <p>Skills</p>
                {/* Agrega más elementos según sea necesario */}
              </div>
            )}
          </div>
        </div>
      </div>
      <main className="container main">
        <section>
          <div className="row">
            <div className="col-6">
              <div className="contAbout">
                <p className="fs-1">Mi nombre es </p>
                <p className="fs-1">Gonzalo</p>
                <p className="fs-5">
                  Soy desarrollador Full Stack con fuerte curiosidad en el
                  diseño web y programacion
                </p>
                <div className="conContactos">
                  <button className="btnLinkedin">Linkedin</button>
                  <button className="btnContacto ms-2">Contacto</button>
                  <button className="btnGitHub ms-2">GitHub</button>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <img className="imgPerfil" src="/img/perfil5.jpg" alt="" />
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
                <Card.Text className="textCardProyect">
                  React Node Express
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
                <Card.Text className="textCardProyect">
                  React Node Express
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
                <Card.Text className="textCardProyect">
                  React Node Express
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
                <Card.Text className="textCardProyect">
                  React Node Express
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
                <Card.Text className="textCardProyect">
                  React Node Express
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
                <Card.Text className="textCardProyect">
                  React Node Express
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
              className="cardProyectosMas"
              style={{ width: "18rem" }}
            ></Card>
            <Card
              className="cardProyectosMas"
              style={{ width: "18rem" }}
            ></Card>
          </div>

          {/* <div className="d-flex flex-wrap justify-content-between ">
            <div>
              <img className="imgProyecto pb-1" src="/img/prueba.PNG" alt="" />
            </div>
            <div>
              <img className="imgProyecto pb-1" src="/img/prueba.PNG" alt="" />
            </div>
            <div>
              <img className="imgProyecto pb-1" src="/img/prueba.PNG" alt="" />
            </div>
            <div>
              <img className="imgProyecto pb-1" src="/img/prueba.PNG" alt="" />
            </div>
            <div>
              <img className="imgProyecto pb-1" src="/img/prueba.PNG" alt="" />
            </div>
          </div> */}
        </section>
        <section className="skills">
          <p className="fs-2">Skills</p>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <Card className="cardSkills" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="titleCardProyect">Frontent</Card.Title>
                  <Card.Text className="textCardProyect d-flex flex-wrap ">
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
              <Card className="cardSkills" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="titleCardProyect">Backend</Card.Title>
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
              <Card className="cardSkills" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="titleCardProyect">Tool</Card.Title>
                  <Card.Text className="textCardProyect d-flex flex-wrap ">
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
          </div>
        </section>
      </main>

      <footer className="footer text-center">
        <p>GonzaloWebDev. © 2023</p>
      </footer>
    </>
  );
}

export default App;
