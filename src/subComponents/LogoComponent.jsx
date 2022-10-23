import React from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "../assets/svg/moon-svgrepo-com.svg";
import { ReactComponent as Sun } from "../assets/svg/sun-svgrepo-com.svg";

const Logo = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2.5rem;
  top: 2rem;
  z-index: 3;
  transition: all 0.5s ease;
  h1 {
    font-weight: 500;
    padding-right: 40px;
  }
  .themeIcon {
    position: absolute;
    left: 75%;
    bottom: 50%;
    transform: translate(30%, 50%);
    height: 85%;
    width: auto;
  }
  @media (max-width: 768px) {
    left: 1.5rem;
    top: 2.4rem;
    h1 {
      font-size: 25px;
    }
  }
  @media (max-width: 500px) {
    top: 2.5rem;
    h1 {
      font-size: 20px;
    }
    .themeIcon {
      left: 0;
      bottom: -0.7rem;
      transform: translate(25%, 130%);
      height: 95%;
    }
  }
`;

const LogoComponent = ({ click, setThemeDark, theme }) => {
  const changeTheme = () => {
    setThemeDark((p) => !p);
  };
  return (
    <Logo onClick={changeTheme} click={click}>
      <h1>RK</h1>
      {theme === "dark" ? (
        <Sun className="themeIcon" />
      ) : (
        <Moon className="themeIcon" />
      )}
    </Logo>
  );
};

export default LogoComponent;
