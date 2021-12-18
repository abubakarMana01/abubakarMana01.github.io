import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

export default function HeroSection() {
  return (
    <HeroContainer id="hero">
      <Fade duration={800} triggerOnce direction="up" delay={500}>
        <h1>Hi, my name is</h1>
      </Fade>

      <Fade duration={800} triggerOnce direction="up" delay={600}>
        <h2>Abubakar Mana.</h2>
      </Fade>

      <Fade duration={800} triggerOnce direction="up" delay={700}>
        <h3>I build things for the web.</h3>
      </Fade>

      <Fade duration={800} triggerOnce direction="up" delay={800}>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <a href="/">Upstatement</a>
        </p>
      </Fade>

      <Fade duration={800} triggerOnce direction="up" delay={900}>
        <div className="hero-button">
          <a href="/">Check out my course!</a>
        </div>
      </Fade>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0 0px 30px 4px;
    font-family: "Fira Code", monospace;
    color: var(--green);
    font-size: 1rem;
    line-height: 1.1;
    font-weight: 600;
  }
  h2 {
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
    font-size: clamp(2.5rem, 8vw, 4rem);
  }
  h3 {
    margin-top: 20px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 600;
  }
  p {
    margin-top: 30px;
    max-width: 540px;
  }

  div.hero-button {
    width: fit-content;
    margin-top: 50px;
    border: 1px solid var(--green);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-size: 0.825rem;
      font-family: "Fira Code", monospace;
      font-weight: 500;
      padding: 1.25rem 1.75rem;
      transition: background-color 0.5s ease;

      &:hover {
        background-color: var(--lightest-navy);
      }

      &::after {
        height: 0;
        width: 0;
      }
    }
  }
`;
