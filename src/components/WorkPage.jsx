import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { Link } from "react-router-dom";
import { ReactComponent as YinYang } from "../assets/svg/yin-yang-solid.svg";
import { keyframes } from "styled-components";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 150px;
  }
`;

const swipe = keyframes`
  0%{
    transform:translateX(0px)
  }
  30%{
    transform:translateX(-35px)
  }
 
  100%{
    transform:translateX(0px)
  }
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: 0;
  padding: 0 5rem 0 calc(12rem + 20vw);
  height: 50vh;
  right: 0;
  overflow-x: auto;
  display: flex;
  align-items: center;

  &::after {
    position: fixed;
    content: "⪻ Swipe Left";
    bottom: 100px;
    left: 45%;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    animation: ${swipe} 2.5s infinite ease;
    display: none;
  }

  @media (max-width: 1000px) {
    padding: 0 3rem 0 7rem;
    &::after {
      display: inline-block;
    }
  }
  @media (max-width: 350px) {
    padding: 0 3rem 0 4vw;
  }
`;
const Projects = styled(Link)`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 0 50px 0 50px;
  text-decoration: none;
  padding: 2rem 5rem;
  backdrop-filter: blur(5px);
  font-size: 1.2rem;
  h3 {
    width: max-content;
  }
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Rotate = styled.div`
  position: fixed;

  width: 80px;
  height: 80px;
  transition: all 0.4s ease;
  right: 1rem;
  bottom: 1rem;
  z-index: 3;
  .yin-small {
    width: 80px;
    height: 80px;
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const WorkPage = ({ setThemeDark, theme }) => {
  const ref = useRef(null);
  const yinYangRef = useRef(null);

  useEffect(() => {
    const rotate = () => {};
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  useEffect(() => {
    let scrollContainer = ref.current;
    let yinYangElement = yinYangRef.current;
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) scrollContainer.scrollLeft += 55;
      else scrollContainer.scrollLeft -= 55;
      yinYangElement.style.transform = `rotate(${
        scrollContainer.scrollLeft / 1.5
      }deg)`;
    });
  }, []);

  return (
    <Box>
      <LogoComponent theme={theme} setThemeDark={setThemeDark} />
      <PowerButton />
      <ParticleComponent theme={theme} page={"work"} />

      <Main
        initial="hidden"
        animate="show"
        variants={container}
        className="main"
        ref={ref}
      >
        {Work.map((work) => (
          <Card key={work.id} work={work} />
        ))}
        <Projects to="/projects">
          <h3>Blogs</h3>
        </Projects>
      </Main>

      <Rotate ref={yinYangRef}>
        <YinYang className="yin-small" />
      </Rotate>
      <BigTitle top="10%" left="65%" text="WORK" />
      <SocialIcons />
    </Box>
  );
};

export default WorkPage;
