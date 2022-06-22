import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

import OtherProjectItem from "../OtherProjectItem";

export default function OtherProjects() {
	const [displayMore, setDisplayMore] = useState(false);

	return (
		<Fade direction="up" triggerOnce duration={800}>
			<Container>
				<Title>Other noteworthy projects</Title>
				<ViewArchiveLink href="https://github.com/abubakarMana01">
					view on github
				</ViewArchiveLink>

				<OtherProjectItemsContainer>
					{noteworthyProjects.map((details, index) => (
						<OtherProjectItem details={details} fadeDelay={index * 100} />
					))}

					{displayMore &&
						moreNoteworthyProjects.map((details) => (
							<OtherProjectItem details={details} />
						))}
				</OtherProjectItemsContainer>

				{moreNoteworthyProjects.length !== 0 && (
					<ShowMoreButton
						onClick={() => setDisplayMore((displayMore) => !displayMore)}
					>
						{!displayMore ? "Show more" : "Show less"}
					</ShowMoreButton>
				)}
			</Container>
		</Fade>
	);
}

const Container = styled.div`
	padding-top: 100px;
`;

const Title = styled.h2`
	font-size: clamp(1.3rem, 4vw, 1.75rem);
	color: var(--lightest-slate);
	font-weight: 700;
	text-transform: capitalize;
	text-align: center;
`;

const ViewArchiveLink = styled.a`
	display: block;
	font-size: 0.875rem;
	font-family: var(--font-mono);
	margin: 0 auto;
	margin-top: 0.625rem;
	width: fit-content;
`;

const OtherProjectItemsContainer = styled.ul`
	display: grid;
	margin: 50px 0px 0px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: minmax(min-content, max-content);
	gap: 1rem;
	position: relative;

	@media (max-width: 830px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;

const ShowMoreButton = styled.button`
	background-color: transparent;
	color: var(--green);
	font-family: var(--font-mono);
	display: block;
	margin: 5rem auto 0px;
	padding: 1.2rem 1.75rem;
	cursor: pointer;
	font-size: 0.825rem;
	border: 1px solid var(--green);
	border-radius: 4px;
	transition: background-color 0.25s ease;

	&:hover {
		background-color: var(--lightest-navy);
	}
`;

const noteworthyProjects = [
	{
		github: "https://github.com/jagora2021/CleanAbuja",
		link: "https://expo.dev/@abubakarmana01/projects/CleanAbuja",
		title: "Clean Abuja",
		description:
			"A project my team worked on to help locate the nearest toilets and waste disposal sites on the map to help keep the community clean",
		technologies: ["React Native", "Expo", "Firebase"],
	},
	{
		github: "https://github.com/abubakarMana01/amazon-ish-backend",
		link: "",
		title: "Amazon-ish backend",
		description:
			"The backend RESTful API server of the Amazon-ish ecommerce application built on Node",
		technologies: ["Node.js", "Express", "TypeScript"],
	},
	{
		github: "https://github.com/abubakarMana01/rn-uber-eats-clone/",
		link: "",
		title: "Uber Eats Clone",
		description:
			"A food ordering mobile app where restaurants in searched locations can be found with various cuisines available at the restaurant",
		technologies: ["React Native", "Yelp", "Google Places"],
	},
	{
		github: "https://github.com/abubakarMana01/rn-instagram",
		link: "https://expo.dev/@abubakarmana01/projects/InstagramClone",
		title: "Instagram-ish",
		description:
			"An Instagram-ish mobile app with authentication and user profile. Users can post photos from their devices",
		technologies: ["React Native", "Firebase", "Expo"],
	},
	{
		github: "https://github.com/abubakarMana01/rn-uber-clone",
		link: "",
		title: "Uber-ish",
		description:
			"An Uber-ish mobile application where users can book rides to their destination with various vehicle type options",
		technologies: ["React Native", "TypeScript", "Maps"],
	},
	{
		github: "https://github.com/abubakarMana01/signal-clone",
		link: "https://expo.dev/@abubakarmana01/projects/mi-messenger",
		title: "Signal messaging app",
		description:
			"An instant messaging mobile application UI with various screens built with React Native",
		technologies: ["React Native", "Camera", "Expo"],
	},
];

const moreNoteworthyProjects = [
	// {
	// 	github: "",
	// 	link: "",
	// 	title: "",
	// 	description: "",
	// 	technologies: [],
	// },
];
