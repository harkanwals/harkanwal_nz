import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 1.45rem 1.0875rem;
  clip-path: polygon(
    0 calc(50% - 2vw),
    100% 0,
    100% 100%,
    0 100%
  );
  background: gray; 
  opacity: 0.7;
  p {
    margin-top: 5%;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <p>
          Footer content goes here. Including Twitter link, contact, etc. 
          Footer content goes here. Including Twitter link, contact, etc.
        </p>
      </FooterContainer>
    );
  }
}

export default Footer;
