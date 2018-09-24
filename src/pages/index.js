import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Typewriter } from "../components/typewriter";

import Showcase from "../components/showcase";

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Montserrat";
  margin-bottom: 3%;
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const TypistWrapper = styled.div`
  font-size: 1.9rem;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const TypewriterWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  color: orange;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const NameText = styled.div`
  font-size: 2.5rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: row;
  width: 100%;
  background-color: gray;
`;

export default ({ data }) => (
  <Layout>
    <div>
      <NameWrapper>
        <NameText>Kia ora, I'm Harkanwal,</NameText>
      </NameWrapper>
      <TypistWrapper>I do data</TypistWrapper>
      <TypewriterWrapper>
        <Typewriter
          className="title-desc"
          texts={[
            "training.",
            "analysis.",
            "visualisation.",
            "journalism.",
            "modelling."
          ]}
        />
      </TypewriterWrapper>
      <Showcase
        showOneImage={data.crimeSmall.childImageSharp}
        showTwoImage={data.allBlacks.childImageSharp}
        showThreeImage={data.budget.childImageSharp}
        showFourImage={data.election.childImageSharp}
      />
      <ImageWrapper>Oh yeah</ImageWrapper>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
    crimeSmall: file(relativePath: { regex: "/crime.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 450) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allBlacks: file(relativePath: { regex: "/allblacks.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 450) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    budget: file(relativePath: { regex: "/budget.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 450) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    election: file(relativePath: { regex: "/election.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 450) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
