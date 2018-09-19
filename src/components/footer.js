import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const FooterContainer = styled.div`
  

  width: 100%;
  padding: 1.45rem 1.0875rem;
  clip-path: polygon(0 calc(70% - 2vw), 100% 0, 100% 100%, 0 100%);
  background: skyblue;
  opacity: 0.7;
  p {
    margin-top: 5%;
  }
  @media(min-width: 1080px){
    clip-path: polygon(0 calc(60% -2vw), 100% 0, 100% 100%, 0 100%);
  }
`;


const ContactContainer = styled.div`
  margin-top: 3%;
  display: flex;
  flex: row wrap;
  justify-content: space-between;
`

const MailInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 3%;
  
  a {
    font-size: 1rem;
    font-style: oblique 40deg;
    color: black;
    text-decoration: none;
  }
`;

const ContactInfo = styled.div`
  margin-right: 3%;
  display: flex;
  justify-content: flex-end;
  a {
    font-size: 1rem;
    color: black;
    text-decoration: none;
  }
`;

const TwitterIcon = styled(FaTwitter)`
  margin-left: 4px;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <ContactContainer>
        <MailInfo>
          <a href="mailto:harkanwal@elementsdata.studio">
            harkanwal@elementsdata.studio
          </a>
        </MailInfo>
        <ContactInfo>
          <a href="https://twitter.com/kamal_hothi">
            @kamal_hothi
            <TwitterIcon />
          </a>
        </ContactInfo>
        </ContactContainer>
      </FooterContainer>
    );
  }
}

export default Footer;
