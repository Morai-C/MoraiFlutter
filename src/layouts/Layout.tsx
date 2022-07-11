import styled from "@emotion/styled";
import HeaderComp from "components/HeaderComp";
import React from "react";

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Wrapper>
        <HeaderComp />
        <div>{children}</div>
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 7rem;
`;
