import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Github } from "../assets/svg/github-brands.svg";

const Box = styled(motion.li)`
  width: 15rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.body};
  border-radius: 0 50px 0 50px;
  transition: all 0.2s ease;
  h2 {
    font-size: calc(1rem + 0.5vw);
  }
  .desc {
    font-size: calc(0.8rem + 0.3vw);
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  .tech {
    h3 {
      position: relative;
      margin-bottom: 5px;
      width: 100%;
    }

    h3:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${(props) => props.theme.body};
    }
  }
  .tags {
    font-size: calc(0.8rem + 0.3vw);
    font-family: "Karla", sans-serif;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
  }
  .tags span {
    margin-right: 1rem;
    margin-bottom: 0.2rem;
  }

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
    backdrop-filter: blur(5px);

    h3:after {
      background-color: ${(props) => props.theme.text};
    }
  }
  @media (max-width: 768px) {
    margin-right: 5rem;
  }
  @media (max-width: 350px) {
    margin-right: 4rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  .link {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1rem + 0.5vw);

    ${Box}:hover & {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }
  }
  .github {
    color: ${(props) => props.theme.body};
    height: calc(2rem + 0.5vw);
    width: calc(2rem + 0.5vw);
    text-decoration: none;

    ${Box}:hover & {
      color: ${(props) => props.theme.text};
    }
  }
`;

const item = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Card = ({ work }) => {
  const { name, description, tags, demo, github } = work;
  return (
    <Box variants={item}>
      <h2>{name}</h2>
      <p className="desc">{description}</p>
      <div className="tech">
        <h3>Tech Stack</h3>
        <div className="tags">
          {tags.map((tag, id) => (
            <span key={id}>#{tag}</span>
          ))}
        </div>
      </div>
      <Footer>
        <a href={demo} className="link" target="_blank" rel="noreferrer">
          Visit
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <Github className="github" />
        </a>
      </Footer>
    </Box>
  );
};

export default Card;
