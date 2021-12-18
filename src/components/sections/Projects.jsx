import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import ProjectListItem from "../ProjectListItem";
import SectionTitle from "../SectionTitle";

export default function Projects() {
  return (
    <ProjectsSection id="work">
      <Fade direction="up" triggerOnce>
        <SectionTitle text="Some things i've built" data="03." />

        <ProjectListItem
          title="Halcyon Theme"
          about="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm."
          technologies={["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"]}
        />
        <ProjectListItem
          title="Spotify Profile"
          about="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          technologies={[
            "React",
            "Styled Components",
            "Express",
            "Spotify API",
            "Heroku",
          ]}
          orientation="left"
          height="md"
        />
        <ProjectListItem
          title="Build a Spotify Connected App"
          about="Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
          Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio."
          technologies={[
            "React",
            "Express",
            "Spotify API",
            "Styled Components",
          ]}
          height="lg"
        />
      </Fade>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section``;
