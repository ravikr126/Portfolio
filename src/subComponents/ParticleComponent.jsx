import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

import configDarkLines from "../config/particlesjs-config-lines-dark.json";
import configDarkDots from "../config/particlesjs-config-dots-dark.json";
import configLightLines from "../config/particlesjs-config-lines-light.json";
import configLightDots from "../config/particlesjs-config-dots-light.json";
import configLightThick from "../config/particlesjs-config-thick-light.json";
import configDarkThick from "../config/particlesjs-config-thick-dark.json";

const Box = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 0;
`;

const ParticleComponent = ({ theme, page }) => {
  return (
    <Box>
      <Particles
        width="100vw"
        height="100vh"
        params={
          page === "skills"
            ? theme === "dark"
              ? configDarkLines
              : configLightLines
            : page === "about"
            ? theme === "dark"
              ? configDarkDots
              : configLightDots
            : theme === "dark"
            ? configDarkThick
            : configLightThick
        }
      />
    </Box>
  );
};

export default ParticleComponent;
