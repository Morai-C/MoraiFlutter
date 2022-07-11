import styled from "@emotion/styled";
import HeaderComp from "components/HeaderComp";
import React from "react";

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <HeaderComp />
        <div>{children}</div>
      </Wrapper>
    </Layout>
  );
};

export default Layout;

const Wrapper = styled.div`
  min-height: 100vh;
`;
