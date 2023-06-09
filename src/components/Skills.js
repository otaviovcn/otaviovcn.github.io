import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { skills } from '../data/skills';

const mappingSkills = (skills, category) => {

  const skillsList = skills.map((skill, index) => {
    if (category === skill.category || category === "All" || skill.category === "All") {
      return (
        <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
          <div className="skill">
            {skill.icon}
            <h5>{skill.iconAlt}</h5>
          </div>
        </Col>
      )
    }
    return null;
  })

  return skillsList;
};

export function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2>
                  <Tab.Container id="skills-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Todas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Front-end</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Back-end</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {mappingSkills(skills, 'All')}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                        {mappingSkills(skills, 'Front-end')}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        {mappingSkills(skills, 'Back-end')}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
