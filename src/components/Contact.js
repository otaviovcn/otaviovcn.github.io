import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/Vini-picture.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaSearchLocation, FaPhone } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Como me encontrar</h2>
                  <h4>{<FaSearchLocation size="1.7rem" color="#0D426C" />} | Recife-PE-Brasil</h4>
                  <h4 background="">{<FaPhone ssize="1.7rem" color="#0D426C"/>} |+55 81 99989-2022</h4>
                  <h4>{<MdAlternateEmail size="1.7rem" color="#0D426C"/>} | viinident@gmail.com</h4>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} id="me-picture" src={me} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
