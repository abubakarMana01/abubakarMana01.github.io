import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export default function SideLinks({ left = false }) {
  return left ? (
    <LeftContainer>
      <Fade triggerOnce direction="up" delay={2000}>
        <Links left={left}>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-codepen"
              >
                <title>CodePen</title>
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>
          </li>
          <Line left={left} />
        </Links>
      </Fade>
    </LeftContainer>
  ) : (
    <RightContainer>
      <Fade triggerOnce direction="right" delay={2000}>
        <a href="/">ym.abubakr7@gmail.com</a>
        <Line left={left} />
      </Fade>
    </RightContainer>
  );
}

const LeftContainer = styled.aside`
  position: fixed;
  bottom: 0;
  left: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    left: 25px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Links = styled.ul`
  width: "fit-content";

  li {
    padding: 10px;
    cursor: pointer;
    transition: transform 0.25s ease-in;

    &:hover {
      transform: translateY(-5px);
    }

    &:hover a {
      color: var(--green);
    }

    a {
      color: var(--light-slate);
      transition: color 0.25s ease-in;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Line = styled.div`
  height: ${({ left }) => (left ? "90px" : "1px")};
  width: ${({ left }) => (left ? "1px" : "90px")};
  background-color: var(--lightest-slate);
  margin: ${({ left }) => (left ? "auto" : "0")};
  margin-top: ${({ left }) => (left ? "18px" : "0")};
`;

const RightContainer = styled.aside`
  position: fixed;
  bottom: -30px;
  right: 60px;
  display: flex;
  align-items: center;
  transform-origin: right;
  transform: rotate(90deg);

  a {
    font-family: var(--font-mono);
    letter-spacing: 2px;
    font-size: 0.775rem;
    color: var(--light-slate);
    transition: color 0.25s ease, transform 0.25s ease-in;
    margin: 0 10px;
    padding: 20px;
  }

  a:hover {
    transform: translateX(-5px);
    color: var(--green);
  }

  @media (max-width: 1080px) {
    right: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
