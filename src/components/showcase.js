import React from "react";
import styled from "styled-components";

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: row no-wrap;

  @media (max-width: 768px) {
    flex-flow: row wrap;
  }
`;

const MainShowcase = styled.div`
display: flex;
flex-flow: row no-wrap;

`

const FirstShowWrapper = styled.div`
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

class Showcase extends React.Component {
  render() {
    return (
      <ShowcaseWrapper>
        <FirstShowWrapper>
          Something good goes here. Extra. Something good goes here. Extra
          Something good goes here. Extra Something good goes here. Extra
          Something good goes here. Extra. Something good goes here. Extra
          Something good goes here. Extra Something good goes here. Extra
        </FirstShowWrapper>
        <FirstShowWrapper>Wait. Wait.</FirstShowWrapper>
      </ShowcaseWrapper>
    );
  }
}

export default Showcase;