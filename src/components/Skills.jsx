import Card from "react-bootstrap/Card";
import { LuMonitorCheck } from "react-icons/lu";
function Skills() {
  return (
    <>
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
                  <LuMonitorCheck className="logoFrontent" />
                </div>

                <p>Frontend</p>
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
                  <img className="logoTool " src="./img/logoTools.png" alt="" />
                </div>

                <p>Tools</p>
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
    </>
  );
}
export default Skills;
