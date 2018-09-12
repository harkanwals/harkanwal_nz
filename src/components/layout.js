import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import {Link} from "gatsby";


const TemplateWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-bottom: 1.45em;
  overflow: hidden;
  position: relative;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;
const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ul {
    list-style: none;
    display: flex;
    margin-top: 2%;
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
            <h2><Link to="/">Harkanwal</Link></h2>
            <MainNav>
              <ul>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/workshop">Speaking</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <TemplateWrapper>{this.props.children}</TemplateWrapper>
        </Wrapper>
      </>
    );
  }
}

export default Layout;
