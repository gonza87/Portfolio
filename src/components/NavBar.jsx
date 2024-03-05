import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
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
            {/* <Nav.Link className="textNav" id="textNav" href="#proyectos">
              Portfolio
            </Nav.Link>

            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
