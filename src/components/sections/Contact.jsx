import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Fade direction="up" triggerOnce duration={800}>
        <SectionTitle text="What's next?" data="04." orientation="small" />

        <h3>Get in touch</h3>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a href="mailto:ym.abubakr7@gmail.com">Say Hello</a>
      </Fade>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  h3 {
    font-size: clamp(2rem, 5vw, 3rem);
    text-align: center;
    color: var(--lightest-slate);
    text-transform: capitalize;
  }
  p {
    text-align: center;
    margin: 20px auto;
    max-width: 600px;
    font-size: 1.1rem;
  }
  a {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 1rem;
    font-family: "Fira Code", monospace;
    line-height: 1;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 50px auto 0;
    display: block;
    width: fit-content;

    &:hover {
      background-color: var(--light-navy);
    }

    &::after {
      height: 0;
      width: 0;
    }
  }
`;
