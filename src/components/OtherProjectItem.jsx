import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

export default function OtherProjectItem({ details, fadeDelay = 100 }) {
	return (
		<Fade
			delay={fadeDelay}
			style={{
				display: "flex",
			}}
		>
			<Container>
				<a
					href={details.link || details.github}
					target="_blank"
					className="no-line overall-link"
					rel="noreferrer"
				>
					<Top>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-folder"
						>
							<title>Folder</title>
							<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
						</svg>

						<TopRightLinks>
							{details.github && (
								<a href={details.github} className="no-line">
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
							)}

							{details.link && (
								<a href={details.link} className="no-line">
									<svg
										style={{
											height: 23.5,
											width: 23.5,
											position: "relative",
											top: -1,
										}}
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
							)}
						</TopRightLinks>
					</Top>

					<Title>{details.title}</Title>
					<ProjectDescription>{details.description}</ProjectDescription>

					<Technologies>
						{details.technologies.map((technology) => (
							<li>{technology}</li>
						))}
					</Technologies>
				</a>
			</Container>
		</Fade>
	);
}

const Container = styled.article`
	box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
	background-color: var(--light-navy);
	padding: 2rem 1.75rem;
	color: var(--light-slate);
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.25s ease;
	height: "100%";

	& a.overall-link {
		display: flex;
		flex-direction: column;
		height: 100%;
		color: var(--light-slate);
	}

	&:hover {
		box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
		transform: translateY(-0.5rem);
	}

	&:hover h3 {
		color: var(--green);
	}
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > svg {
		width: 40px;
		height: 40px;
		stroke: var(--green);
	}
`;

const TopRightLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	a {
		cursor: pointer;
		color: var(--light-slate);
	}

	a:hover svg {
		stroke: var(--green);
		transition: stroke 0.25s ease;
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;

const Title = styled.h3`
	margin: 2rem 0 1rem 0;
	font-size: 1.2rem;
	color: var(--lightest-slate);
	font-weight: 600;
	transition: color 0.25s ease;
`;

const ProjectDescription = styled.p`
	font-weight: 400;
	font-size: 0.85rem;
	margin-bottom: 2rem;
`;

const Technologies = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: auto;
	gap: 1rem;

	li {
		font-family: var(--font-mono);
		font-weight: 300;
		font-size: 0.8rem;
	}
`;
