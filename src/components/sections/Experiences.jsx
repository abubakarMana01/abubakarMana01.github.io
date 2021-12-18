import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";
import Tab from "../ExperienceTab";

export default function Experiences() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  const handleTab5 = () => {
    setActiveTab("tab5");
  };

  return (
    <ExperienceContainer id="experience">
      <Fade direction="up" triggerOnce duration={800}>
        <SectionTitle text="Where i've worked" data="02." />

        <ContentContainer>
          <TabNav>
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              Upstatement <span />
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              Scout <span />
            </li>
            <li
              className={activeTab === "tab3" ? "active" : ""}
              onClick={handleTab3}
            >
              Apple <span />
            </li>
            <li
              className={activeTab === "tab4" ? "active" : ""}
              onClick={handleTab4}
            >
              Scout <span />
            </li>
            <li
              className={activeTab === "tab5" ? "active" : ""}
              onClick={handleTab5}
            >
              Starry <span />
            </li>
          </TabNav>

          <Tabs>
            {activeTab === "tab1" && (
              <Fade duration={1000}>
                <Tab
                  position="Software Engineer Intern"
                  placeOfWork="NITDA"
                  dateStart="July 2021"
                  dateEnd="October 2021"
                  roles={[
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                  ]}
                />
              </Fade>
            )}
            {activeTab === "tab2" && (
              <Fade>
                <Tab
                  position="Software Engineer Intern"
                  placeOfWork="NITDA"
                  dateStart="July 2021"
                  dateEnd="October 2021"
                  roles={[
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                  ]}
                />
              </Fade>
            )}
            {activeTab === "tab3" && (
              <Fade>
                <Tab
                  position="Software Engineer Intern"
                  placeOfWork="NITDA"
                  dateStart="July 2021"
                  dateEnd="October 2021"
                  roles={[
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                  ]}
                />
              </Fade>
            )}
            {activeTab === "tab4" && (
              <Fade>
                <Tab
                  position="Software Engineer Intern"
                  placeOfWork="NITDA"
                  dateStart="July 2021"
                  dateEnd="October 2021"
                  roles={[
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                  ]}
                />
              </Fade>
            )}
            {activeTab === "tab5" && (
              <Fade>
                <Tab
                  position="Software Engineer Intern"
                  placeOfWork="NITDA"
                  dateStart="July 2021"
                  dateEnd="October 2021"
                  roles={[
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                  ]}
                />
              </Fade>
            )}
          </Tabs>
        </ContentContainer>
      </Fade>
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.section`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TabNav = styled.ul`
  margin-right: 1.5rem;

  li {
    position: relative;
    padding: 0 20px;
    height: 40px;
    display: flex;
    align-items: center;
    font-family: "Fira Code", monospace;
    font-size: 0.8125rem;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;

    &:hover {
      background-color: var(--light-navy);
      color: var(--green);
    }

    span {
      position: absolute;
      width: 2px;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: var(--dark-slate);
    }
  }
  .active {
    span {
      background-color: var(--green);
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;

    li {
      padding: 0 30px;

      span {
        height: 2px;
        width: 100%;
        right: 0;
        left: 0;
        top: auto;
        bottom: 0;
      }
    }
  }
`;

const Tabs = styled.div`
  flex: 1;
`;
