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
        <h2>About.</h2>
        <p>
          I think data and develop data visualisation to explore complex
          narratives.
        </p>
        <p>
          Currently, I am working as Data Visualisation Engineer at WestpacNZ.
        </p>
        <p>
          Previously, I did data journalism in different media outlets in NZ,
          followed by working as a data visualisation contractor - developing
          bespoke solutions and teaching data visualisation.
        </p>
        <p>I use D3.js, React, R and Python.</p>
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
    dataTalk: file(relativePath: { regex: "/datatalk.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1025, maxHeight: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
