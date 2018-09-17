import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";

const TemplateWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-bottom: 1.45em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  a {
    text-shadow: none;
    background-image: none;
  }
`;

class Layout extends React.Component {
  render() {
    return (
      <>
        <Helmet
          title={`Harkanwal Singh - Data Visualisation Experience Designer`}
          meta={[
            {
              name: "description",
              content:
                "Harkanwal Singh is a data visualisation teacher and developer based in Auckland, New Zealand"
            },
            {
              name: "keywords",
              content:
                "data visualisation, harkanwal, new zealand data journalist"
            }
          ]}
        />
        <Wrapper>
          <Header />
          <TemplateWrapper>{this.props.children}</TemplateWrapper>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default Layout;