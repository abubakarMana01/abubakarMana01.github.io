import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <AboutContainer id="about">
      <Fade direction="up" triggerOnce>
        <SectionTitle text="About me" data="01." />
      </Fade>
      <Fade direction="up" triggerOnce duration={800}>
        <ContentContainer>
          <Content>
            <p>
              Hello! My name is Abubakar and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2019 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
              <br />
              <br />
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at{" "}
              <a href="/">Upstatement</a> for a variety of clients.
              <br />
              <br />I also recently launched a course that covers everything you
              need to build a web app with the Spotify API using Node & React.
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>TypeScript</li>
              <li>Next.js</li>
            </ul>
          </Content>
          <ImageContainer>
            <ImageWrapper>
              <img loading="eager" src="./images/me.avif" alt="me" />
            </ImageWrapper>
          </ImageContainer>
        </ContentContainer>
      </Fade>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  padding: 80px 0 100px 0;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.article`
  flex: 0.5;

  p {
    line-height: 1.7;
  }

  ul {
    margin-top: 20px;
    font-size: 0.8125rem;
    font-family: var(--font-mono);
    line-height: 1.5;
    font-weight: 500;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));

    li {
      margin-bottom: 10px;
    }

    li::before {
      content: "▹";
      margin-right: 10px;
      color: var(--green);
    }
  }
`;

const ImageContainer = styled.div`
  flex: 0.5;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const ImageWrapper = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
  border-radius: 4px;
  max-width: 300px;
  max-height: 300px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-color: var(--green-tint);
  }

  &:hover::before {
    transition: background-color 0.25s ease;
    background-color: transparent;
  }

  &:hover::after {
    transform: translateY(15px) translateX(15px);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    transform: translateY(20px) translateX(20px);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border: 2px solid var(--green);
    z-index: -1;
    border-radius: 4px;
    transition: transform 0.25s ease;
  }

  @media (max-width: 768px) {
    img {
      max-width: 300px;
    }
  }
`;
