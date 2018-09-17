import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  margin: 0 auto;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <p>
          <a href="https://twitter.com/kamal_hothi">@kamal_hothi</a>
        </p>
      </FooterContainer>
    );
  }
}

export default Footer;
