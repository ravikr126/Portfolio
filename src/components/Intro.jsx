import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/pixton-avatar-full-body.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  width: 65vw;
  height: 55vh;
  display: flex;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  border-left: solid 2px ${(props) => props.theme.body};
  border-right: solid 2px ${(props) => props.theme.text};

  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    background: none;
    background: linear-gradient(
          to bottom,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        left,
      linear-gradient(
          to bottom,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        right;
    border-left: none;
    border-right: none;
    border-top: solid 2px ${(props) => props.theme.body};
    border-bottom: solid 2px ${(props) => props.theme.text};

    background-repeat: no-repeat;
    background-size: 2px 100%;
    overflow: hidden;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  img {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 150%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    img {
      height: 200%;
      bottom: -220px;
      left: 50%;
      transform: translate(-45%, 0);
    }
  }
`;

const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.1vw);
    font-weight: 300;
  }

  h2 {
    font-weight: 800;
    font-size: 60px;
  }
  @media (max-width: 768px) {
    & > * {
      padding-top: 15px;
    }
    h3 {
      font-size: calc(0.8rem + 2vw);
    }
    h2 {
      font-weight: 800;
      font-size: 40px;
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "55vh", opacity: 1 }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
        <h1>Hi,</h1>
                    <h3>I'm Ravi Kumar.</h3>
                    <h6>I am Competative Coder and Full-stack Developer.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <div>
          <img src={Me} alt="" />
        </div>
      </SubBox>
    </Box>
  );
};

export default Intro;
