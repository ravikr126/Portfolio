import React from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ProjectComponent from "./ProjectComponent";
import { Projects } from "../data/ProjectData";
import AnchorComponent from "../subComponents/AnchorComponent";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: auto;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.9)`};
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
  z-index: 3;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const MoreProjects = ({ setThemeDark }) => {
  return (
    <MainContainer variants={container} initial="hidden" animate="show">
      <Container>
        <LogoComponent setThemeDark={setThemeDark} />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent />
        <Center>
          <Grid>
            {Projects.map((project) => (
              <ProjectComponent key={project.id} project={project} />
            ))}
          </Grid>
        </Center>
      </Container>
      <BigTitle top="1%" left="15%" text="PROJECTS" />
    </MainContainer>
  );
};

export default MoreProjects;
