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
        <ul>
          <a href="#">
            <img src="/images/twitter.png" alt="twitter" />
          </a>

          <li></li>
          <a href="#">
            <img src="/images/dribbble.png" alt="basketball" />
          </a>
          <li></li>
          <a href="#">
            <img src="/images/figma.png" alt="figma" />
          </a>
          <li></li>
          <a href="#">
            <img src="/images/github.png" alt="github" />
          </a>
        </ul>
      </div>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.1rem;
    .logo {
      flex: 1;
    }
    .social-links {
      width: 25%;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          font-size: 12px;
          color: #6e6e6e;
        }
      }
    }
  }
`;
