import styled from "@emotion/styled";
import HorizontalCard from "components/cards/HorizontalCard";
import VerticalCard from "components/cards/VerticalCard";
import Layout from "layouts/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <HorizontalCard />
        <VerticalCard />
      </Wrapper>
    </Layout>
  );
};

export default Home;
const Wrapper = styled.div``;
