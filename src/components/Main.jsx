import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { ReactComponent as YinYang } from "../assets/svg/yin-yang-solid.svg";
import { keyframes } from "styled-components";
import Intro from "./Intro";
import { motion } from "framer-motion";
import ResumePdf from "../assets/resume/cv_ravi.pdf";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    height: ${`${window.innerHeight}px`};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
  from{
    transform:rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
`;
const levitate = keyframes`
  0%{
    transform:translateY(0)
  }
  50%{
    transform:translateY(5px)
  }
  100%{
    transform:translateY(0px)
  }
`;

const Center = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  .yin-yang {
    width: ${(props) => (props.click ? "120px" : "200px")};
    height: ${(props) => (props.click ? "120px" : "200px")};
    margin-bottom: 0.5rem;
    animation: ${rotate} infinite 1.5s linear;
    cursor: pointer;
    z-index: inherit;
    transition: all 1s ease;
    color: ${(props) => props.theme.text};
  }
  span {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    animation: ${levitate} infinite 1.5s ease-out;
    color: ${(props) => props.theme.text};
    cursor: default;
  }
  @media (max-width: 768px) {
    top: ${(props) => (props.click ? "88%" : "50%")};
    left: ${(props) => (props.click ? "85%" : "50%")};

    .yin-yang {
      width: ${(props) => (props.click ? "70px" : "120px")};
      height: ${(props) => (props.click ? "70px" : "120px")};
    }
    span {
      font-size: 13px;
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.text};
  top: 0;
  bottom: 0;
  right: 50%;
  height: ${(props) => (props.click ? "100%" : "0")};
  width: ${(props) => (props.click ? "50%" : "0")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    bottom: 50%;
    height: ${(props) => (props.click ? "50%" : "0")};
    width: ${(props) => (props.click ? "100%" : "0")};
  }
`;

const Resume = styled(motion.a)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  text-decoration: none;
  z-index: 3;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    top: 2.5rem;
    right: 1.5em;
    h3 {
      font-weight: ${(props) => (props.click ? "400" : "600")};
    }
  }
`;

const SKILLS = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  text-decoration: none;

  h3 {
    font-size: 25px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    color: ${(props) => props.theme.text};
    h3 {
      font-size: 20px;
    }
  }
`;
const WORK = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 3rem;
  text-decoration: none;
  transform: translate(-50%, -50%) rotate(270deg);
  z-index: 3;
  h3 {
    font-size: 25px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    left: 1.5rem;

    h3 {
      font-size: 20px;
    }
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 4rem);
  z-index: 3;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
`;
const ABOUT = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: 3rem;
  text-decoration: none;
  transform: translate(50%, -50%) rotate(90deg);
  z-index: 3;
  h3 {
    font-size: 25px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    right: 1.5rem;
    h3 {
      font-size: 20px;
    }
  }
`;
const Contact = styled(motion(Link))`
  color: ${(props) => props.theme.text};

  text-decoration: none;

  h3 {
    font-size: 25px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
  }
`;

const Main = ({ setThemeDark, theme }) => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <LogoComponent
          click={click}
          setThemeDark={setThemeDark}
          theme={theme}
        />
        <PowerButton />
        <Center click={click}>
          <YinYang className="yin-yang" onClick={() => setClick((p) => !p)} />

          <span>Tap</span>
        </Center>
        <Resume
          initial={{ y: -100 }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 0.5 },
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href={ResumePdf}
          target="_blank"
          download
          click={click}
        >
          <h3>Resume.</h3>
        </Resume>
        <ABOUT to={"/about"} click={click}>
          <motion.h3
            initial={{ y: -100 }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            About.
          </motion.h3>
        </ABOUT>

        <BottomBar>
          <Contact
            to="#"
            initial={{ y: 100 }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3>Say hi 🖐..</h3>
          </Contact>
          <SKILLS to={"/skills"} click={click}>
            <motion.h3
              initial={{ y: 100 }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h3>
          </SKILLS>
        </BottomBar>
        <WORK to={"/work"} click={click}>
          <motion.h3
            initial={{ y: -100 }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Work.
          </motion.h3>
        </WORK>
        <SocialIcons click={click} />
      </Container>
      {click && <Intro click={click} />}
    </MainContainer>
  );
};

export default Main;
