import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function Proyects() {
  return (
    <>
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
            <Card.Title className="titleCardProyect">HackTwitter</Card.Title>
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
    </>
  );
}

export default Proyects;
