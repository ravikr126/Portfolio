import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PowerBtn } from "../assets/svg/power-off-solid.svg";
const Power = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.body};
  padding: 0.3rem;
  border-radius: 50%;
  border: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 3;

  .powerBtn {
    color: ${(props) => props.theme.text};
  }
  &:hover {
    box-shadow: 0 0 15px ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <Link to={"/"}>
        <PowerBtn className="powerBtn" />
      </Link>
    </Power>
  );
};

export default PowerButton;
