import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { projects } from "../data";

export const Projects = () => {
  const mappingProjects = (projects, category) => {
    const filteredProjects = projects.map((project, index) => {
      if (category === project.category || category === "All") {
        return (
          <ProjectCard
            key={index}
            {...project}
          />
        )
      };
    })


    console.log(projects.some((project) => project.category !== category));

    if(!projects.some((project) => project.category === category) && category !== "All") {
      return <p>Não há projetos para esta categoria</p>
    }
    return filteredProjects;
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>Estou entusiasmado com a possibilidade de explorar oportunidades futuras e trabalhar em projetos emocionantes que possam contribuir para nosso crescimento mútuo. Se você tiver alguma pergunta ou se desejar mais informações sobre meus projetos, não hesite em me perguntar.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Todos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Fullstack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Front-end</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Back-end</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            mappingProjects(projects, 'All')
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            mappingProjects(projects, 'Fullstack')
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            mappingProjects(projects, 'Front-end')
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {
                            mappingProjects(projects, 'Back-end')
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
