import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export function Skills() {
  return (
    <Container>
      <section className="skills-container">
        <h2>Skills</h2>
        {
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
        </Tab.Container>
        }
      </section>
    </Container>
  )
}
