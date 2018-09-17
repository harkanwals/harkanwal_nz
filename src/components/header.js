import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MainH = styled.p`
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
`;

const MainNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-directon: row;
  justify-content: space-between;
  width: 90%;
  margin-left: 0%;
  transform:rotate(-2deg);
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
          border-bottom: 2px solid red;
        }
      }
    }
  }
`;
const HeaderContainer = styled.div`
  background: #ffca00;
  opacity: 0.8;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  width:110%;
  margin-top: -1.5%;
  left:-5%;
  transform:rotate(2deg);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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
    );
  }
}

export default Header;
