import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import Img from "gatsby-image";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-wrap;
  width: 90%;
  max-width: 760px;
  line-height: 2;
  h3 {
    font-family: "Montserrat";
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
  p {
    font-family: "Merriweather";
  }
`;



export default ({ data }) => (
  <Layout>
    <AboutContainer>
      <div>
        <h2>A little bit ‘about’ me.</h2>
        <p>
          I think data and develop data visualisation to explore complex
          narratives.
        </p>
        <p>
          My journey to data and visualisation involved traversing three
          different newsrooms in Aotearoa New Zealand.
        </p>
        <p>
          Nowadays, I develop and design visualisation at Elements Data Studio
          as a co-founder.
        </p>
        <p>
          At the New Zealand Herald, I created and headed the data journalism
          department which eventually grew to have three full-time roles and
          also resulted in the inception of Herald Insights - a dedicated data
          journalism subsite.
        </p>
        <p>
          I won the NZ media awards for the best use of interactive graphics twice
          and the best innovation in multimedia storytelling, during that time.
        </p>
        <p>
          I taught myself programming and visualisation. I am
          passionate about learning and understanding the world through data.
        </p>
        <Img fluid={data.dataTalk.childImageSharp.fluid} />
        <p>
          The same passion is what led me to develop data visualisation
          workshops, which I teach frequently. These include, an introduction to
          data and visualisation, R programming and D3.js introduction.
        </p>
      </div>
    </AboutContainer>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dataTalk: file(relativePath: {regex: "/datatalk.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 1025, maxHeight: 600){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
