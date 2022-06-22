import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<FooterContainer>
			<a href="https://github.com/bchiang7" target="_blank" rel="noreferrer">
				Designed by Brittany Chiang
			</a>
			<a
				href="https://github.com/abubakarMana01/"
				target="_blank"
				rel="noreferrer"
			>
				Built by Yahya Mana Abubakar. {new Date().getFullYear()}
			</a>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	padding: 20px;
	padding-top: 100px;
	display: grid;
	place-items: center;
	gap: 0.5rem;

	a {
		color: var(--slate);
		font-size: 0.825rem;
		font-family: var(--font-mono);
		transition: color 0.3s ease, transform 0.3s ease;
		text-align: center;
	}
	a:hover {
		color: var(--green);
		transform: translateY(-3px);
	}
`;
