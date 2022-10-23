import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import music from "../assets/audio/music.mp3";
import { ReactComponent as Note } from "../assets/svg/musical-note-svgrepo-com.svg";

const Box = styled(motion.div)`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: ${(props) => (props.path === "/work" ? "auto" : "1.4rem")};
  top: ${(props) => (props.path === "/work" ? "2.5rem" : "auto")};
  right: 2rem;
  z-index: 13;

  .note {
    height: 1.5rem;
    transform: rotate(10deg);
  }

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }
  & > *:nth-child(6) {
    animation-delay: 0.7s;
  }

  @media (max-width: 768px) {
    bottom: ${(props) => (props.path === "/work" ? "auto" : "1.2rem")};
    top: ${(props) => (props.path === "/work" ? "2.5rem" : "auto")};
    right: 1rem;
    .note {
      height: 1.2rem;
    }
  }
  @media (max-width: 500px) {
    bottom: auto;
    top: ${(props) => (props.path !== "/" ? "2.5rem" : "5.5rem")};
    right: 1.5rem;
    .note {
      height: 1rem;
    }
  }
`;

const play = keyframes`
  0%{
    transform:scaleY(1)
  }
  50%{
    transform:scaleY(1.8)
  }
  100%{
    transform:scaleY(1)
  }
`;

const Line = styled.span`
  background-color: ${(props) => props.theme.text};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 0.8rem;
  width: 2px;
  margin: 0 1.5px;
  @media (max-width: 768px) {
    height: 0.5rem;
  }
  @media (max-width: 425px) {
    height: 0.4rem;
  }
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((p) => !p);
    if (!click) ref.current.play();
    if (click) ref.current.pause();
  };

  const location = useLocation();
  return (
    <Box
      initial={{ x: 100 }}
      animate={{
        x: 0,
        transition: { type: "spring", duration: 1.5, delay: 0.5 },
      }}
      onClick={handleClick}
      path={location.pathname}
    >
      <Note className="note" />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
