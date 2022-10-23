import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Github } from "../assets/svg/github-brands.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin-circled.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook-brands.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter-brands.svg";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2.2rem;
  z-index: 4;
  a {
    width: 1.6rem;
    height: 1.6rem;
    margin-bottom: 1rem;
  }
  .socialIcon {
    width: 100%;
    height: 100%;
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

    &:hover {
      transform: scale(1.1);
    }
  }
  .number {
    position: absolute;
    background-color: #fff;
    left: 2.5rem;
    bottom: 8.3rem;
    border-radius: 5px;
    width: 9rem;
    height: 3rem;
    padding: 0 10px;
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    display: ${(props) => (props.phone ? "flex" : "none")};
    align-items: center;
    justify-content: space-evenly;
    a {
      text-decoration: none;
      height: min-content;
      width: min-content;
      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.body};
      padding: 3px 10px;
      border-radius: 3px;
      margin: 0;
      display: none;
    }
  }

  & :nth-child(2) {
    margin-bottom: 0.8rem;
  }
  @media (max-width: 768px) {
    left: 0.8rem;

    a {
      width: 1.3rem;
      height: 1.3rem;
    }
    .socialIcon {
      color: ${(props) => props.theme.text};
    }
    .number {
      width: 12rem;
      height: 3rem;
      left: 2rem;
      bottom: 8.2rem;
      a {
        display: inline-block;
      }
    }
  }

  @media (max-width: 320px) {
    left: 0.5rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.click ? props.theme.body : props.theme.text};

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.text};
  }
`;

const SocialIcons = ({ click }) => {
  const [phone, setPhone] = useState(false);

  return (
    <Icons click={click} phone={phone}>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1.5, 1, 1] }}
        transition={{ type: "spring", duration: 1.5, delay: 1.2 }}
        href="https://github.com/ravikr126"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="socialIcon" />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1.5, 1, 1] }}
        transition={{ type: "spring", duration: 1.5, delay: 1.4 }}
        href="https://www.linkedin.com/in/ravi-kumar-950747b4/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="socialIcon" />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1.5, 1, 1] }}
        transition={{ type: "spring", duration: 1.5, delay: 1.6 }}
        href="https://www.facebook.com/profile.php?id=100045570251729"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook className="socialIcon" />
      </motion.a>
      <motion.a
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1.5, 1, 1] }}
        transition={{ type: "spring", duration: 1.5, delay: 1.6 }}
        href="https://twitter.com/ravi14577"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className="socialIcon" />
      </motion.a>

      <Line
        initial={{ y: 200 }}
        animate={{
          y: 0,
          transition: { type: "tween", duration: 0.75, delay: 0.5 },
        }}
        click={click}
      />
    </Icons>
  );
};

export default SocialIcons;
