import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/otavio-vinicius/" target='_blank' rel="noreferrer"><FaLinkedinIn size="1.15em" color="white" /></a>
              <a href="https://github.com/otaviovcn" target='_blank' rel="noreferrer"><FaGithub size="1.15em" color="white" /></a>
            </div>
            <p>{`Copyright ${currentYear}. All Rights Reserved`}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
