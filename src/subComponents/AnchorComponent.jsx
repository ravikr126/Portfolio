import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Chain } from "../assets/svg/link-solid.svg";
import { ReactComponent as Anchor } from "../assets/svg/anchor-solid.svg";

const Container = styled.div`
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    width: 20px;
    height: 20px;
    color: currentColor;
    transform: rotate(-45deg);
    color: ${(props) => props.theme.text};
  }
  .anchor {
    width: 70px;
    height: 70px;
    color: currentColor;
    color: ${(props) => props.theme.text};
  }
`;

const AnchorComponent = () => {
  const ref = useRef(null);

  const handleScroll = () => {
    let scrollPos = window.pageYOffset / 7;
    try {
      ref.current.style.transform = `translateY(${scrollPos - 88}%)`;
    } catch (error) {
      ref.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map(() => (
          <Chain className="chain" />
        ))}
        <Anchor className="anchor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
