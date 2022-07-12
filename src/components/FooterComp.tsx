import styled from "@emotion/styled";
import React from "react";

const FooterComp: React.FC = (): JSX.Element => {
  return (
    <Footer>
      <form
        action="https://checkout.flutterwave.com/v3/hosted/pay"
        method="POST"
      >
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
            <span className="fw-700 fs-22">$25</span> fee and everything is
            ready to go.
          </p>
        </div>
        <input
          type="hidden"
          name="public_key"
          value="FLWPUBK_TEST-bab3ce1dd7bcec25318e9b259a88aa9c-X"
        />
        <input type="hidden" name="tx_ref" value="bitethtx-019203" />
        <input type="hidden" name="amount" value="25" />
        <input type="hidden" name="currency" value="USD" />
        <input
          type="hidden"
          name="redirect_url"
          value="http://localhost:3000/"
        />
        <input type="hidden" name="meta[token]" value="54" />
        <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
        <input
          type="hidden"
          name="customer[email]"
          value="itzemorai87@gmail.com"
        />
        <button type="submit">JOIN US</button>
      </form>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    button {
      color: white;
      background-color: #000;
      padding: 0.86rem 3.9rem;
      cursor: pointer;
    }
  }
`;
