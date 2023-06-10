import { SiExpress, SiSequelize, SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaDocker, FaPython } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

const size = '50px';

export const backend = [
  {
    category: "Back-end",
    description: "",
    icon: <SiExpress size={size} />,
    iconAlt: "Express",
  },
  {
    category: "Back-end",
    description: "",
    icon: <FaNodeJs size={size} />,
    iconAlt: "NodeJS",
  },
  {
    category: "Back-end",
    description: "",
    icon: <FaDocker size={size} />,
    iconAlt: "Docker",
  },
  {
    category: "Back-end",
    description: "",
    icon: <GrMysql size={size} />,
    iconAlt: "MySQL",
  },
  {
    category: "Back-end",
    description: "",
    icon: <SiSequelize size={size} />,
    iconAlt: "Sequelize",
  },
  {
    category: "Back-end",
    description: "",
    icon: <SiMongodb size={size} />,
    iconAlt: "MongoDB",
  },
  {
    category: "Back-end",
    description: "",
    icon: <FaPython size={size} />,
    iconAlt: "Python",
  }
]