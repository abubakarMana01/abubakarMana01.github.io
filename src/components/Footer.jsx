import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <a href="https://github.com/abubakarMana01/">
        Designed & Built by Yahya Mana Abubakar. 2021
      </a>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 20px;
  padding-top: 100px;
  display: grid;
  place-items: center;

  a {
    color: var(--slate);
    font-size: 0.825rem;
    font-family: "Fira Code", monospace;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  a:hover {
    color: var(--green);
    transform: translateY(-3px);
  }
`;
