import styled from "@emotion/styled";
import React from "react";

const FooterComp: React.FC = (): JSX.Element => {
  return (
    <Footer>
      <h1
        className="fw-500 fs-32"
        style={{ marginBottom: 12, color: "#2c2c2c" }}
      >
        Join our Team of Writers
      </h1>
      <div style={{ marginBottom: 35, textAlign: "center" }}>
        <p className="fw-400 fs-22" style={{ color: "#6e6e6e" }}>
          On dasdas, writers earn a living doing what they love.
        </p>
        <p className="fw-400 fs-22" style={{ color: "#6e6e6e" }}>
          Getting started is easy. Just pay a one time{" "}
          <span className="fw-700 fs-22">$25</span> fee and everything is ready
          to go.
        </p>
      </div>
      <button>JOIN US</button>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  button {
    color: white;
    background-color: #000;
    padding: 0.86rem 3.9rem;
  }
`;
