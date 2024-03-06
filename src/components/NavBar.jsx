import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="titleNav" href="#home">
          GWD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex align-items-center">
              <a className="textNav" href="#proyectos">
                Portfolio
              </a>
            </div>
            <div className="d-flex align-items-center">
              <a className="ms-lg-2 textNav" href="#contacto">
                Contacto
              </a>
            </div>
            <div className="d-flex align-items-center">
              <a className="ms-lg-2 textNav" href="#skills">
                Skills
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
