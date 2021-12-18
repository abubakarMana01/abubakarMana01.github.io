import React from "react";
import styled from "styled-components";

export default function Tab({
  position,
  placeOfWork,
  dateStart,
  dateEnd,
  roles,
}) {
  return (
    <Container>
      <h3>
        {position} <span>@</span> <a href="/">{placeOfWork}</a>
      </h3>
      <p>
        {dateStart} - {dateEnd}
      </p>

      <Roles>
        {roles.map((role) => (
          <li>{role}</li>
        ))}
      </Roles>
    </Container>
  );
}

const Container = styled.div`
  h3 {
    font-size: 1.175rem;
    margin-bottom: 2px;
    font-weight: 500;
    line-height: 1.3;
    color: var(--lightest-slate);

    span {
      color: var(--green);
    }
  }

  p {
    font-size: 0.8125rem;
    margin-bottom: 25px;
    font-family: "Fira Code", monospace;
  }
`;

const Roles = styled.ul`
  li {
    font-size: 0.9rem;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: flex-start;
    line-height: 1.5;
    font-weight: 500;

    &::before {
      content: "▹";
      color: var(--green);
      margin-right: 15px;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
