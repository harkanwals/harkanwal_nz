import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";



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

const Showcase = props => (
  <div>
    <ShowcaseWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showOneImage.fluid} />
      </FirstShowWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showTwoImage.fluid} />
        <p>All the All Black tests</p>
      </FirstShowWrapper>
    </ShowcaseWrapper>
    <ShowcaseWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showThreeImage.fluid} />
        <p>NZ budget</p>
      </FirstShowWrapper>
      <FirstShowWrapper>
        <Img fluid={props.showFourImage.fluid} />
        <p>Election prediction visualisaiton</p>
      </FirstShowWrapper>
    </ShowcaseWrapper>
  </div>
);

export default Showcase;
