/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Item = {
  id: number;
  modified: string;
  date: string;
  title?: { rendered: String };
  excerpt?: { rendered: String };
  jetpack_featured_media_url: string;
  link?: string;
  slug?: string;
};

const VerticalCard: React.FC = () => {
  const [data, setData] = useState<Array<Item>>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://techcrunch.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  if (isLoading) return <p>Loading....</p>;
  if (!data) return <p>no profile data</p>;
  return (
    <Wrapper className="card-container">
      {data.map((item, index) => (
        <div className="vertical-card" key={index}>
          <div className="card-inner">
            <div className="card-image">
              <img src={item.jetpack_featured_media_url} alt="" />
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
                <span className="fs-12">{item.modified}</span>
              </div>
              <div className="subject fw-700 fs-22" style={{ marginBottom: 8 }}>
                <Link href={`/details/${item.slug}`}>
                  {item.title?.rendered.substring(0, 20)}
                </Link>
              </div>
              <div className="text-content" style={{ marginBottom: 35 }}>
                {item.excerpt?.rendered.substring(0, 250)}
              </div>
              <div className="read">
                <span className="fs-12 fw-500" style={{ color: "#6e6e6e" }}>
                  {item.date} Min Read
                </span>
                <a
                  href={item.link}
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

// const CardData = [
//   {
//     id: 1,
//     img: "1",

//     duration: "1 Month Ago",
//     subject: "Css Grid ",
//     description: (
//       <p className="fw-400" style={{ color: "#6e6e6e" }}>
//         The CSS Grid Layout Module offers a grid-based <br /> layout system,
//         with rows and columns, making it <br /> easier to design web pages
//         without having to use <br /> floats and positioning.
//       </p>
//     ),
//     read: "12",
//     link: "/details",
//   },
//   {
//     id: 2,
//     img: "2",

//     duration: "2 Month Ago",
//     subject: "Colors in Css",
//     description: (
//       <p className="fw-400" style={{ color: "#6e6e6e" }}>
//         Colors play a vital role in making a web page <br /> usable or not. In
//         CSS, we can control the <br /> foreground and background color of an
//         element <br /> with the color and background properties.
//       </p>
//     ),
//     read: "8",
//     link: "/details",
//   },
//   {
//     id: 3,
//     img: "3",

//     duration: "2 Month Ago",
//     subject: "Css Variables",
//     description: (
//       <p className="fw-400" style={{ color: "#6e6e6e" }}>
//         CSS variables are custom properties that cascade <br /> normally and
//         even inherit. They start with a <br /> reserved -- prefix, and there are
//         no real rules <br /> about their value.
//       </p>
//     ),
//     read: "10",
//     link: "/details",
//   },
// ];
