/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";

const VerticalCard: React.FC = () => {
  return (
    <Wrapper className="card-container">
      {CardData.map((card) => (
        <div className="vertical-card" key={card.id}>
          <div className="card-inner">
            <div className="card-image">
              <img
                src={`/images/img_${card.img}.png`}
                alt={`card-img-${card.img}`}
              />
            </div>
            <div className="card-body">
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
                <span className="fs-12">{card.duration}</span>
              </div>
              <div className="subject" style={{ marginBottom: 8 }}>
                <p className="fs-22 fw-700">{card.subject}</p>
              </div>
              <div className="text-content" style={{ marginBottom: 35 }}>
                {card.description}
              </div>
              <div className="read">
                <span className="fs-12 fw-500" style={{ color: "#6e6e6e" }}>
                  {card.read} Min Read
                </span>
                <a
                  href={card.link}
                  className="fs-12 fw-700"
                  style={{ color: "#1473E6" }}
                >
                  Read Full <i className="fas fa-arrow-right fs-12"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default VerticalCard;

const Wrapper = styled.div``;

const CardData = [
  {
    id: 1,
    img: "1",

    duration: "1 Month Ago",
    subject: "Css Grid ",
    description: (
      <p className="fw-400" style={{ color: "#6e6e6e" }}>
        The CSS Grid Layout Module offers a grid-based <br /> layout system,
        with rows and columns, making it <br /> easier to design web pages
        without having to use <br /> floats and positioning.
      </p>
    ),
    read: "12",
    link: "#",
  },
  {
    id: 2,
    img: "2",

    duration: "2 Month Ago",
    subject: "Colors in Css",
    description: (
      <p className="fw-400" style={{ color: "#6e6e6e" }}>
        Colors play a vital role in making a web page <br /> usable or not. In
        CSS, we can control the <br /> foreground and background color of an
        element <br /> with the color and background properties.
      </p>
    ),
    read: "8",
    link: "#",
  },
  {
    id: 3,
    img: "3",

    duration: "2 Month Ago",
    subject: "Css Variables",
    description: (
      <p className="fw-400" style={{ color: "#6e6e6e" }}>
        CSS variables are custom properties that cascade <br /> normally and
        even inherit. They start with a <br /> reserved -- prefix, and there are
        no real rules <br /> about their value.
      </p>
    ),
    read: "10",
    link: "#",
  },
];
