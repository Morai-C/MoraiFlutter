/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";

const HorizontalCard: React.FC = () => {
  return (
    <Wrapper className="horizontal-card">
      <div className="left-content">
        <img src="/images/large.png" alt="" />
      </div>
      <div className="right-content">
        <div className="title-and-time">
          <span
            className="fs-12 fw-700"
            style={{ color: "#4b4b4b", marginBottom: 8 }}
          >
            Front-end
          </span>
          <ul>
            <li className="fs-12"></li>
          </ul>
          <span className="fs-12">1 Hour Ago</span>
        </div>
        <div className="subject" style={{ marginBottom: 8 }}>
          <p className="fs-22 fw-700">Optimizing CSS for faster page loads </p>
        </div>
        <div className="text-content" style={{ marginBottom: 35 }}>
          <p className="fw-400" style={{ color: "#6e6e6e" }}>
            Not long ago I decided to improve the loading times of my website.
            It already loads pretty <br /> fast, but I knew there was still room
            for improvement and one of them was CSS loading. I <br /> will walk
            you through the process and show you how you can improve your load
            times as <br /> well.
            <br />
            <br />
            To see how CSS affects the load time of a webpage we first have to
            know how the browser <br /> converts an HTML document into a
            functional webpage...
          </p>
        </div>
        <div className="read">
          <span className="fs-12 fw-500" style={{ color: "#6e6e6e" }}>
            3 Min Read
          </span>
          <a href="#" className="fs-12 fw-700" style={{ color: "#1473E6" }}>
            Read Full <i className="fas fa-arrow-right fs-12"></i>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HorizontalCard;

const Wrapper = styled.div``;
