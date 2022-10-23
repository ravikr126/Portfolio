import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(8rem + 15vw);
  text-decoration: none;
  border: solid 2px ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  height: 18rem;
  padding: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  img {
    width: 100%;
    height: 60%;
    background-size: cover;
    background-position: center;
    border: 2px solid transparent;
    box-sizing: border-box;
  }
  h3 {
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: "Karla", sans-serif;
    font-weight: 700;
    border-bottom: 1px solid ${(props) => props.theme.text};
  }
  p {
    color: ${(props) => `rgba(${props.theme.textRgba},0.8)`};
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    img {
      border: 2px solid ${(props) => props.theme.body};
    }
    h3 {
      border-bottom: 1px solid ${(props) => props.theme.body};
    }
    p {
      color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
    }
    transition: all 0.4s ease;
  }

  @media (max-width: 768px) {
    width: calc(12rem + 15vw);
    h3 {
      font-size: 17px;
    }
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 450px) {
    img {
      height: 50%;
    }
  }
  @media (max-width: 320px) {
    width: calc(10rem + 15vw);
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const item = {
  show: { opacity: 1, transform: "scale(1)" },
  hidden: { opacity: 0, transform: "scale(0)" },
};

const ProjectComponent = ({ project }) => {
  return (
    <Box variants={item} target={"_blank"} href={project.link}>
      <img src={project.imgSrc} alt="project" />
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
    </Box>
  );
};

export default ProjectComponent;
