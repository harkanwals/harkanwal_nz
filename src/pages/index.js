import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Typewriter } from "../components/typewriter";

import "./index.css"

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const TypistWrapper = styled.div`
  color: red;
`;

const NameText = styled.div`
  p {
    font-size: 2.5rem;
  }
`;

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  border: dashed pink;
  @media (max-width: 768px) {
    flex-flow: row wrap;
  }
`;

const FirstShowWrapper = styled.div`
  border: dashed red;
  flex: 1;
  width: 100%;
  margin-right: 10px;
  &;last-child {
    margin-right: 0;
  } 
  @media (max-width: 768px) {
    flex: 1 1 auto;
    margin-bottom: 10px;
  }
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
        <NameText>Harkanwal</NameText> 
      </NameWrapper>
        <TypistWrapper> I do data 
          <Typewriter
            className="title-desc"
            texts={[
              "analysis.",
              "visualisation.",
              "journalism.",
              "training.",
              "dreaming."
            ]}
          />
        </TypistWrapper>
  
      <ShowcaseWrapper>
        <FirstShowWrapper>
          Something good goes here. Extra. Something good goes here. Extra
          Something good goes here. Extra Something good goes here. Extra
          Something good goes here. Extra. Something good goes here. Extra
          Something good goes here. Extra Something good goes here. Extra
        </FirstShowWrapper>
        <FirstShowWrapper>Wait. Wait.</FirstShowWrapper>
      </ShowcaseWrapper>
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
  }
`;
