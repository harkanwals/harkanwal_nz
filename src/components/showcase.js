import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { FaExternalLinkAlt } from "react-icons/fa";

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  padding: 1.45rem;
  width: 960px;
  @media (max-width: 768px) {
    flex-flow: row wrap;
    width: 450px;
  }
`;

const FirstShowWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 1.5rem;
  &;last-child {
    margin-right: 0;
  } 
  @media (max-width: 768px) {
    flex: 1 1 auto;
    margin-bottom: 10px;
  }
`;

const Intro = styled.p`
  a {
    margin-top: 3px;
    font-size: 1.1rem;
    color: gray;
    text-decoration: underline;
    text-decoration-color: black;
  }
`;

const Showcase = props => (
  <div>
    <ShowcaseWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showOneImage.fluid} />
        <Intro>
          <a href="https://insights.nzherald.co.nz/article/counting-crime/" target="_blank" rel="noopener noreferrer">
            Mapping crime in New Zealand<FaExternalLinkAlt />
          </a>
        </Intro>
      </FirstShowWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showTwoImage.fluid} />
        <Intro>
          <a href="https://insights.nzherald.co.nz/article/every-test-the-all-blacks-have-ever-played/" target="_blank" rel="noopener noreferrer">
            All the All Black tests<FaExternalLinkAlt />
          </a>
        </Intro>
      </FirstShowWrapper>
    </ShowcaseWrapper>
    <ShowcaseWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showThreeImage.fluid} />
        <Intro>
          <a href="https://insights.nzherald.co.nz/article/budget-2015-where-the-budget-goes/" target="_blank" rel="noopener noreferrer">
            Every expenditure in 2015 NZ budget<FaExternalLinkAlt />
          </a>
        </Intro>
      </FirstShowWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showFourImage.fluid} />
        <Intro>
          <a href="https://insights.nzherald.co.nz/article/2017-election-forecast/" target="_blank" rel="noopener noreferrer">
            Election prediction visualisation<FaExternalLinkAlt />
          </a>
        </Intro>
      </FirstShowWrapper>
    </ShowcaseWrapper>
  </div>
);

export default Showcase;
