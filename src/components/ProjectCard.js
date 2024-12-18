import { Col } from "react-bootstrap";
import { AiFillEye } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ title, imgUrl, demoLink, repoLink, category, languages }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`A ${category} project`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5>{category}</h5>
          <h6>{languages}</h6>
          <div>

            {repoLink ? <a className="project-icons" href={repoLink} target="_blank" rel="noreferrer">{<FaGithub size="3rem" color="" />}GitHub</a> : null}

            {demoLink ? <a className="project-icons" href={demoLink} target="_blank" rel="noreferrer">{<AiFillEye size="3rem" color="" />}Demo</a> : null}

          </div>
        </div>
      </div>
    </Col>
  )
}
