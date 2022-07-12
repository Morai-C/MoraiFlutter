import styled from "@emotion/styled";
import HorizontalCard from "components/cards/HorizontalCard";
import VerticalCard from "components/cards/VerticalCard";
import FooterComp from "components/FooterComp";
import Layout from "layouts/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <HorizontalCard />
        {/* <VerticalCard /> */}
        <div style={{ marginBottom: "11.14rem" }}>
          <VerticalCard />
        </div>
        <FooterComp />
      </Wrapper>
    </Layout>
  );
};

export default Home;
const Wrapper = styled.div``;
