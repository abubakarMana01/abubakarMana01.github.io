import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import SectionTitle from "../SectionTitle";
import Tab from "../ExperienceTab";

export default function Experiences() {
	const [activeTab, setActiveTab] = useState("tab3");

	const handleTab = (tab) => {
		setActiveTab(tab);
	};

	return (
		<ExperienceContainer id="experience">
			<Fade direction="up" triggerOnce duration={800}>
				<SectionTitle text="Where i've worked" data="02." />

				<ContentContainer>
					<TabNav>
						<li
							className={activeTab === "tab3" ? "active" : ""}
							onClick={() => handleTab("tab3")}
						>
							CCL <span />
						</li>
						<li
							className={activeTab === "tab1" ? "active" : ""}
							onClick={() => handleTab("tab1")}
						>
							Kwilax
							<span />
						</li>
						<li
							className={activeTab === "tab2" ? "active" : ""}
							onClick={() => handleTab("tab2")}
						>
							NITDA <span />
						</li>
					</TabNav>

					<Tabs>
						{activeTab === "tab3" && (
							<Fade>
								<Tab
									position="Software Engineer Intern"
									placeOfWork="CypherCrescent Ltd."
									dateStart="July 2022"
									dateEnd="Present"
									link="https://www.cyphercrescent.com.ng/"
									roles={[
										"Using Vue.js to build powerful frontend user interfaces for web applications",
										"Implementation of proper design principles",
										"Consuming RESTful API's to add dynamic content to frontend of applications",
									]}
								/>
							</Fade>
						)}
						{activeTab === "tab1" && (
							<Fade duration={1000}>
								<Tab
									position="Software Developer"
									placeOfWork="Kwilax Tech Ltd."
									link="https://kwilax.com"
									dateStart="May 2021"
									dateEnd="Present"
									roles={[
										"Work with a variety of different languages, platforms, frameworks, such as TypeScript, React, React Native and Next JS",
										"Write modern, performant, maintainable code for a diverse array of client and internal projects",
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
									link="https://nitda.gov.ng/"
									roles={[
										"Writing modern, performant maintainable code while working in a professional development environment",
										"Using software development frameworks, methodologies and project management tools",
										"Using version control systems properly.",
										"Writing and working with RESTful API’s (Application Programming Interface)'s",
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
		font-family: var(--font-mono);
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
