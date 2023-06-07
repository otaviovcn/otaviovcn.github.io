import { Col } from "react-bootstrap";
import { AiFillEye } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ title, imgUrl, demoLink, repoLink, category }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`A ${category} project`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a className="project-icons" href={repoLink}>{<FaGithub size="3rem" color="" />}</a>
          <a className="project-icons" href={demoLink}>{<AiFillEye size="3rem" color="" />}</a>
        </div>
      </div>
    </Col>
  )
}
