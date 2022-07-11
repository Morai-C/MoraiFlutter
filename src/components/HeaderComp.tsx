/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";

const HeaderComp: React.FC = (): JSX.Element => {
  return (
    <Header>
      <div className="logo">
        <img src="/images/Dasdas Logo 1.png" alt="" />
      </div>
      <div className="social-links">
        <a href="#">
          <img src="/images/twitter.png" alt="twitter" />
        </a>

        <a href="#">
          <img src="/images/dribbble.png" alt="basketball" />
        </a>
        <a href="#">
          <img src="/images/figma.png" alt="figma" />
        </a>
        <a href="#">
          <img src="/images/github.png" alt="github" />
        </a>
      </div>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  background-color: red;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.1rem;
  }
`;
