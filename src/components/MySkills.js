import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiJsonwebtokens,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import Skill from "./Skill";

function MySkills() {
  const allSkills = [
    {
      name: "ReactJS",
      expertise: "80",
      icon: <SiReact />,
    },
    {
      name: "Redux",
      expertise: "80",
      icon: <SiRedux />,
    },
    {
      name: "NodeJS",
      expertise: "60",
      icon: <IoLogoNodejs />,
    },
    {
      name: "Express",
      expertise: "80",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      expertise: "80",
      icon: <SiMongodb />,
    },

    {
      name: "Json web token",
      expertise: "100",
      icon: <SiJsonwebtokens />,
    },
    {
      name: "HTML",
      expertise: "100",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      expertise: "100",
      icon: <SiCss3 />,
    },
  ];
  return (
    <Container fluid="md xl" id="skills">
      <div className="section-top-padding">
        <h3 className="section-heading">SKILLS</h3>
      </div>
      <Row>
        {allSkills.map((skill, i) => {
          return (
            <Col className="mb-4" key={i} lg={4}>
              <Skill skill={skill} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MySkills;
