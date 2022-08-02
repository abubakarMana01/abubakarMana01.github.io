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
							2019 when I started pursuing a degree in{" "}
							<a href="https://nileuniversity.edu.ng">Software Engineering</a>{" "}
							which made me to start learning HTML & CSS!
							<br />
							<br />
							Fast-forward to today, I’ve had the privilege of working at a
							start-up. My main focus these days is building accessible,
							inclusive products and digital experiences at{" "}
							<a href="/">Kwilax</a>.
							<br /> I recently completed an Internship at{" "}
							<a href="https://nitda.gov.ng">NITDA</a> which has given me much
							more exposure to the industry.
							<br />
							<br />
							I’ve participated in hackathons which include the{" "}
							<a href="/">Google Solution Challenge</a> and the{" "}
							<a href="/">NACOS</a>/<a href="https://fsi.ng">FSI</a> annual
							hackathon where my team came 2nd and 4th positions respectively.
							<br />
							Here are a few technologies I’ve been working with recently:
						</p>
						<ul>
							<li>JavaScript (ES6+)</li>
							<li>React.js</li>
							<li>React Native</li>
							<li>Node.js</li>
							<li>Vue.js</li>
							<li>Firebase</li>
							<li>MongoDB</li>
							<li>TypeScript</li>
							<li>Next.js</li>
						</ul>
					</Content>
					<ImageContainer>
						<ImageWrapper>
							<img loading="eager" src="./images/dp.jpg" alt="me" />
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
