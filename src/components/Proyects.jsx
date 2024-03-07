
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
            <Card.Link href="https://github.com/gonza87/HackShop_Front_Users" target="_blank" rel="noopener noreferrer">
              <FaGithub className="linksCardProyect" size={25} />
            </Card.Link>
            <Card.Link href="https://hack-shop-front-users-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
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
            <Card.Link href="https://github.com/gonza87/Hackflix" target="_blank" rel="noopener noreferrer">
              <FaGithub className="linksCardProyect" size={25} />
            </Card.Link>
            <Card.Link href="https://gonza87.github.io/Hackflix/" target="_blank" rel="noopener noreferrer">
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
            <Card.Link href="https://github.com/gonza87/tweeter_front" target="_blank" rel="noopener noreferrer">
              <FaGithub className="linksCardProyect" size={25} />
            </Card.Link>
            <Card.Link href="https://tweeter-front-puce.vercel.app/" target="_blank" rel="noopener noreferrer">
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
            <Card.Link href="https://github.com/gonza87/JSProyectoFinal" target="_blank" rel="noopener noreferrer">
              <FaGithub className="linksCardProyect" size={25} />
            </Card.Link>
            <Card.Link href="https://gonza87.github.io/JSProyectoFinal/" target="_blank" rel="noopener noreferrer">
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
            <Card.Link href="https://github.com/gonza87/DWProyectoFinal" target="_blank" rel="noopener noreferrer">
              <FaGithub className="linksCardProyect" size={25} />
            </Card.Link>
            <Card.Link href="https://gonza87.github.io/DWProyectoFinal/" target="_blank" rel="noopener noreferrer">
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
            <Card.Link href="https://github.com/gonza87/maquetado01" target="_blank" rel="noopener noreferrer">
              <FaGithub className="linksCardProyect" size={25} />
            </Card.Link>
            <Card.Link href="https://gonza87.github.io/maquetado01/" target="_blank" rel="noopener noreferrer">
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
