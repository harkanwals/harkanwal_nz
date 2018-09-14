import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import "./layout.css";



const TemplateWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  border: dashed blue;
  max-width: 960px;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-bottom: 1.45em;
  overflow: hidden;
  position: relative;
  border: dashed red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  a {
    text-shadow: none;
    background-image: none;
  }
`;


const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  max-width: 960px;
  width: 100%;
  border: dashed orange;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: dashed black;
  width: 100%;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  margin: 0 auto;
`

const MainH = styled.p`
  border: dashed yellow;
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
`

const MainNav = styled.nav`
  border: dashed green;
  display: flex;
  flex-wrap: wrap;
  flex-directon: row;
  justify-content: space-between;
  width: 90%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    li {
      margin-left: 20px;
      font-family: "Open Sans";
      a {
        text-decoration: none;
        color: #8c8c8c;
        &:hover {
          border-bottom: 2px solid skyblue;
        }
      }
    }
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
          <HeaderContainer>
            
            <MainNav>
            <MainH><Link to="/">Home</Link></MainH>
              <ul>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/speaking">Speaking</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <TemplateWrapper>{this.props.children}</TemplateWrapper>

          <FooterContainer>
            <p><a href="https://twitter.com/kamal_hothi">@kamal_hothi</a></p>
          </FooterContainer>
        </Wrapper>
      </>
    );
  }
}

export default Layout;
