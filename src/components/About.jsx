import { Link } from "react-router-dom";

function About() {
  const linkedin = "https://www.linkedin.com/in/gonzaloviglioni/";
  const webGitHub = "https://github.com/gonza87";
  return (
    <div className="row">
      <div className="col-12 col-md-6 order-last order-md-first">
        <div className="contAbout">
          <p className="titleAbout">Me llamo Gonzalo</p>

          <p className="fs-5 textAbout">
            Soy desarrollador Web Full Stack con fuerte curiosidad en el diseño
            y programación.
            <p className="fs-5 textAbout">
              Estoy abierto a nuevas oportunidades y colaboraciones ¡no dudes en
              contactarme!
            </p>
          </p>
          <div className="conContactos">
            <Link to={linkedin} style={{ textDecoration: "none" }}>
              <button className="btnLinkedin me-2 mt-1">Linkedin</button>
            </Link>

            <a href="#contacto">
              <button className="btnContacto me-2">Contacto</button>
            </a>
            <Link to={webGitHub} style={{ textDecoration: "none" }}>
              <button className="btnGitHub me-2 mt-1">GitHub</button>
            </Link>

            <button className="btnCV mt-1">Descarga CV</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-end order-first order-md-last contImgPerfil">
        <img className="imgPerfil" src="/img/perfil9.jpg" alt="" />
      </div>
    </div>
  );
}

export default About;
