import React from "react";
import styled from "styled-components";

export default function SectionTitle({ text, data, orientation = "large" }) {
	return orientation === "large" ? (
		<TitleLarge data={data}>{text}</TitleLarge>
	) : (
		<TitleSmall data={data}>{text}</TitleSmall>
	);
}

const TitleSmall = styled.h2`
	text-align: center;
	font-size: clamp(1rem, 5vw, 1.2rem);
	font-family: var(--font-mono);
	font-weight: 400;
	color: var(--green);
	transition: color 0.25s ease;
	margin: 10px 0px 20px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: capitalize;

	&::before {
		content: attr(data);
		font-size: clamp(0.825rem, 3vw, 1rem);
		margin-right: 10px;
		font-weight: 500;
	}
`;

const TitleLarge = styled.h2`
	font-size: clamp(1.3rem, 5vw, 1.725rem);
	color: var(--lightest-slate);
	transition: color 0.25s ease;
	margin: 10px 0px 40px;
	font-weight: 700;
	position: relative;
	white-space: nowrap;
	display: flex;
	align-items: center;
	text-transform: capitalize;

	&::before {
		content: attr(data);
		font-size: clamp(1rem, 3vw, 1.25rem);
		margin-right: 10px;
		color: var(--green);
		font-weight: 500;
	}
	&::after {
		content: "";
		position: relative;
		display: inline-block;
		background-color: var(--lightest-navy);
		width: 0;
		height: 1px;
		margin-left: 20px;

		@media (max-width: 768px) {
			width: 100%;
			flex: 1;
		}

		@media (max-width: 1080px) {
			width: 200px;
		}
	}
`;
