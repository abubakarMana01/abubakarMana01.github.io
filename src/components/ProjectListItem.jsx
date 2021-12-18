import React from "react";
import styled from "styled-components";

export default function ProjectListItem({
  title,
  about,
  technologies = [],
  orientation = "default",
  height = "sm",
}) {
  return (
    <ProjectList height={height} orientation={orientation}>
      <li>
        <ProjectImage orientation={orientation}>
          <img src="./images/halcyon.png" alt="" />
        </ProjectImage>
        <ProjectDetails orientation={orientation}>
          <p>Featured Project</p>
          <h3>{title}</h3>
          <div>
            <p>{about}</p>
          </div>
          <ul>
            {technologies &&
              technologies.map((technology) => <li>{technology}</li>)}
          </ul>
          <span>
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

            <a href="/">
              <svg
                style={{ height: 23, width: 23 }}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </span>
        </ProjectDetails>
      </li>
    </ProjectList>
  );
}

const ProjectList = styled.ul`
  & > li {
    margin-bottom: 100px;
    position: relative;

    display: flex;
    flex-direction: ${({ orientation }) =>
      orientation === "default" ? "row" : "column"};

    @media (max-width: 768px) {
      margin-right: auto;
      box-shadow: 0 5px 30px 2px var(--navy-shadow);
    }
    @media (max-width: 700px) {
      min-height: 450px;
    }
    @media (max-width: 570px) {
      min-height: ${({ height }) =>
        height === "lg" ? "550px" : height === "md" ? "450px" : "400px"};
    }
    @media (max-width: 500px) {
      min-height: ${({ height }) =>
        height === "lg" ? "550px" : height === "md" ? "450px" : "400px"};
    }
    @media (max-width: 430px) {
      min-height: ${({ height }) =>
        height === "lg" ? "600px" : height === "md" ? "450px" : "400px"};
    }
    @media (max-width: 400px) {
      min-height: ${({ height }) =>
        height === "lg" ? "570px" : height === "md" ? "450px" : "400px"};
    }
    @media (max-width: 365px) {
      min-height: ${({ height }) =>
        height === "lg" ? "650px" : height === "md" ? "500px" : "400px"};
    }
    @media (max-width: 330px) {
      min-height: ${({ height }) =>
        height === "lg" ? "700px" : height === "md" ? "530px" : "440px"};
    }
    @media (max-width: 305px) {
      min-height: ${({ height }) =>
        height === "lg" ? "730px" : height === "md" ? "560px" : "480px"};
    }
    @media (max-width: 290px) {
      min-height: ${({ height }) =>
        height === "lg" ? "800px" : height === "md" ? "650px" : "550px"};
    }
  }
`;

const ProjectImage = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin-left: ${({ orientation }) => (orientation === "default" ? 0 : "auto")};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(100, 255, 218, 0.2);
    transition: background-color 0.1s ease;
  }

  &:hover::after {
    background-color: transparent;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;

    &::after {
      background-color: rgba(10, 25, 47, 0.9);
      transition: background-color 0.3s ease;
    }

    &:hover::after {
      background-color: rgba(10, 25, 47, 0.95);
    }
  }
`;

const ProjectDetails = styled.article`
  text-align: ${({ orientation }) =>
    orientation === "default" ? "right" : "left"};
  position: absolute;
  top: 50%;
  right: ${({ orientation }) => (orientation === "default" ? 0 : "auto")};
  left: ${({ orientation }) => (orientation === "default" ? "auto" : 0)};
  transform: translateY(-50%);

  h3 {
    color: var(--lightest-slate);
    font-size: clamp(1.25rem, 5vw, 1.55rem);
    margin-bottom: 20px;
  }

  & > p {
    margin: 10px 0px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    font-weight: 400;
  }

  & > span {
    display: flex;
    align-items: center;
    margin-left: ${({ orientation }) =>
      orientation === "default" ? "auto" : 0};
    width: 65px;
    justify-content: space-between;
    margin-top: 25px;

    a {
      color: var(--lightest-slate);
    }

    a::after {
      width: 0;
      height: 0;
    }

    svg {
      width: 20px;
      height: 20px;
      transition: color 0.3s ease;
      cursor: pointer;

      &:hover {
        color: var(--green);
      }
    }
  }

  & > div {
    background-color: var(--light-navy);
    transition: var(--transition);
    position: relative;
    padding: 25px;
    border-radius: 4px;
    width: 80%;
    margin-left: ${({ orientation }) =>
      orientation === "default" ? "auto" : 0};
    max-width: 600px;

    p {
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--light-slate);
      font-weight: 400;
    }

    @media (max-width: 1080px) {
      max-width: 700px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-family: var(--font-mono);
    font-weight: 500;
    width: fit-content;
    margin: 25px 0 10px;
    margin-left: ${({ orientation }) =>
      orientation === "default" ? "auto" : 0};

    li {
      margin-left: ${({ orientation }) =>
        orientation === "default" ? "20px" : 0};
      margin-right: ${({ orientation }) =>
        orientation === "default" ? 0 : "20px"};
    }
  }

  @media (max-width: 768px) {
    text-align: left;
    padding: 40px;
    right: 0;
    left: 0;

    & > span {
      margin-left: 0;
    }

    & > div {
      max-width: none;
      width: 100%;
      background-color: transparent;
      padding: 0;
    }

    ul {
      margin-left: 0;
      flex-wrap: wrap;

      li {
        margin-right: 20px;
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 25px;
  }
`;
