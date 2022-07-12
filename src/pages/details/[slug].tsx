/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import VerticalCard from "components/cards/VerticalCard";
import Layout from "layouts/Layout";
import { NextPage } from "next";
import React from "react";

const SingleDetailsPage: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="article-container">
          <article>
            <p className="fw-500 fs-12" style={{ color: "#4b4b4b" }}>
              By Ryan Jackson{" "}
              <span className="fw-500 fs-12" style={{ color: "#6e6e6e" }}>
                {" "}
                2 Month Ago
              </span>{" "}
            </p>
            <p
              className="fw-900 fs-32"
              style={{ color: "#2c2c2c", marginBottom: "1.6rem" }}
            >
              Optimisizing CSS for faster page loads
            </p>
            <p className="fw-400" style={{ color: "#6e6e6e" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              non blandit massa enim. Pulvinar sapien et ligula ullamcorper
              malesuada proin libero nunc consequat. Aliquam sem fringilla ut
              morbi tincidunt augue interdum velit. Tellus elementum sagittis
              vitae et leo duis ut diam. Eget nullam non nisi est sit amet.
              Dignissim suspendisse in est ante in nibh mauris. Nec feugiat in
              fermentum posuere urna. Diam in arcu cursus euismod quis viverra.
              Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
              Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.
              Sed egestas egestas fringilla phasellus faucibus scelerisque
              eleifend. Sed elementum tempus egestas sed sed risus pretium quam
              vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in
              ante. Viverra nibh cras pulvinar mattis nunc sed blandit libero.
              Morbi tincidunt augue interdum velit euismod in. Accumsan lacus
              vel facilisis volutpat est velit egestas dui. Erat pellentesque
              adipiscing commodo elit at imperdiet. Quis risus sed vulputate
              odio ut. Nulla aliquet enim tortor at auctor urna.
            </p>
          </article>
          <img src="/images/Safari (Catalina) - Dark 1.png" alt="" />
          <article>
            <p className="fw-400" style={{ color: "#6e6e6e" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              non blandit massa enim. Pulvinar sapien et ligula ullamcorper
              malesuada proin libero nunc consequat. Aliquam sem fringilla ut
              morbi tincidunt augue interdum velit. Tellus elementum sagittis
              vitae et leo duis ut diam. Eget nullam non nisi est sit amet.
              Dignissim suspendisse in est ante in nibh mauris. Nec feugiat in
              fermentum posuere urna. Diam in arcu cursus euismod quis viverra.
              Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
              Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.
              Sed egestas egestas fringilla phasellus faucibus scelerisque
              eleifend. Sed elementum tempus egestas sed sed risus pretium quam
              vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in
              ante. Viverra nibh cras pulvinar mattis nunc sed blandit libero.
              Morbi tincidunt augue interdum velit euismod in. Accumsan lacus
              vel facilisis volutpat est velit egestas dui. Erat pellentesque
              adipiscing commodo elit at imperdiet. Quis risus sed vulputate
              odio ut. Nulla aliquet enim tortor at auctor urna.
            </p>
            <p className="fw-400" style={{ color: "#6e6e6e" }}>
              Proin fermentum leo vel orci porta non pulvinar neque. In egestas
              erat imperdiet sed euismod nisi porta lorem. Metus vulputate eu
              scelerisque felis imperdiet proin fermentum. Luctus venenatis
              lectus magna fringilla. Nunc scelerisque viverra mauris in
              aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Sem
              et tortor consequat id porta nibh venenatis cras sed. Sed felis
              eget velit aliquet sagittis id. Auctor neque vitae tempus quam
              pellentesque nec nam aliquam sem. Tincidunt ornare massa eget
              egestas purus viverra accumsan in. Aliquet lectus proin nibh nisl
              condime.
            </p>
          </article>
        </div>

        <section>
          <p
            className="fw-900 fs-24"
            style={{ color: "#2c2c2c", marginBottom: "2.36rem" }}
          >
            More Articles
          </p>
          <VerticalCard />
        </section>
      </Wrapper>
    </Layout>
  );
};

export default SingleDetailsPage;

const Wrapper = styled.div`
  .article-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    article {
      max-width: 50.36rem;
      width: 100%;
      margin-bottom: 1.7rem;
    }
    img {
      margin-bottom: 1.7rem;
    }
  }
`;
