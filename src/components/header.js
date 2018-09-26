import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MainH = styled.p`
  display: flex;
  justify-content: flex-start;
  font-family: "Montserrat";
  margin-left: 10%;
  a {
    color: black;
    text-decoration: none;
  
  }
`;

const MainNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-directon: row;
  justify-content: space-between;
  width: 90%;
  @media (min-width: 1080px) {
    width: 60%;
    margin-left: 20%;
  }
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
        color: black;
        &:hover {
          border-bottom: 2px solid gray;
        }
      }
    }
  }
`;
const HeaderContainer = styled.div`
  background: #00c8b6;
  opacity: 0.7;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
  @media (min-width: 1080px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2vw));
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <MainNav>
          <MainH>
            <Link to="/">Home</Link>
          </MainH>
          <ul>
           
            <li>
              <Link to="/speaking">Speaking</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </MainNav>
      </HeaderContainer>
    );
  }
}

export default Header;
