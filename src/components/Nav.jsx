import React, { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

export default function Nav() {
  const navRef = useRef();
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    window.pageYOffset
  );
  const [useShadow, setUseShadow] = useState(false);

  window.onscroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
      navRef.current.style.transform = "translateY(0)";
      setPreviousScrollPosition(currentScrollPosition);
      currentScrollPosition === 0 ? setUseShadow(false) : setUseShadow(true);
      currentScrollPosition === 0
        ? (navRef.current.style.height = "100px")
        : (navRef.current.style.height = "70px");
    } else {
      navRef.current.style.transform = "translateY(-100px)";
      setPreviousScrollPosition(currentScrollPosition);
      setUseShadow(false);
    }
  };

  return (
    <Container useShadow={useShadow} ref={navRef}>
      <a href="/">
        <img width="42" height="42" src="/images/logo.svg" alt="Logo" />
      </a>

      <NavLinks>
        <Fade duration={800} triggerOnce direction="down">
          <li>
            <a data-number="01." href="#about">
              About
            </a>
          </li>
        </Fade>

        <Fade duration={800} triggerOnce direction="down" delay={100}>
          <li>
            <a data-number="02." href="#experience">
              Experience
            </a>
          </li>
        </Fade>

        <Fade duration={800} triggerOnce direction="down" delay={200}>
          <li>
            <a data-number="03." href="#work">
              Work
            </a>
          </li>
        </Fade>

        <Fade duration={800} triggerOnce direction="down" delay={300}>
          <li>
            <a data-number="04." href="#contact">
              Contact
            </a>
          </li>
        </Fade>

        <Fade duration={800} triggerOnce direction="down" delay={400}>
          <div>
            <a href="/">Resume</a>
          </div>
        </Fade>
      </NavLinks>
    </Container>
  );
}

const Container = styled.nav`
  background-color: rgba(10, 25, 47, 0.85);
  position: fixed;
  zindex: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Fira Code", monospace;
  box-shadow: ${({ useShadow }) =>
    useShadow ? "0 10px 30px -10px var(--navy-shadow)" : "none"};
  transition: transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    padding: 15px;

    a {
      font-size: 0.825rem;
      color: var(--lightest-slate);
      transition: color 0.25s ease;
    }
    a::before {
      content: attr(data-number);
      margin-right: 5px;
      color: var(--green);
    }
    a:hover {
      color: var(--green);
    }
  }

  div {
    margin-left: 1rem;

    a {
      border: 1px solid var(--green);
      border-radius: 4px;
      padding: 0.6rem 1rem;
      font-size: 0.825rem;
      transition: background-color 0.25s ease;

      &:hover {
        background-color: var(--lightest-navy);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
