import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from "../assets/audio/u-said-it-v13-1167.mp3"
import { ReactComponent as Note } from "../assets/svg/musical-note-svgrepo-com.svg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";




const Box = styled(motion.div)`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: fixed;
 
left:8rem;
top:3rem;
z-index:10;


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
  height: 1rem;
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
