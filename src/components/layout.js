import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";


const TemplateWrapper = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: center;
  flex: row wrap;
  a {
    text-decoration: none;
    color: hsla(10,5%,20%,0.8)
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
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