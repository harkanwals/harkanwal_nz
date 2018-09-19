import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 760px;
  line-height: 2.5;
  h3 {
    font-family: "Montserrat";
  }
`

export default ({ data }) => (
  <Layout>
    <AboutContainer>
 
 <div>
   <h3>Hi, I'm Harkanwal.</h3>
 </div>
<div>
<p>I develop and design data visualisation. I am the co-founder of Elements Data Studio.</p>

<p>I am interested in data visualisation as a central focus for communication and decision-making, rather than as an ancillary part of the process.</p>

<p>I also teach data and visualisation workshops, with separate focus on theoretical and practical. These include workshops for learning data visualisation tools, R and D3.</p>

<p>Previously, I created and headed the first dedicated data journalism department at the New Zealand Herald. This led to the launch of the Herald Insights section and three permanent positions for data journalism in the newsroom.</p>

<p>I worked in the New Zealand media from 2011 to 2017, first at the Waikato Times in Hamilton as a web editor and then for the Stuff site as a data journalist, the first such full time role in the country. I have won the media awards for the best interactive graphics twice and the best multimedia storytelling.</p>

<p>I eventually left working for media, having accomplished more than I thought that was possible, to focus on developing data visualisation products and studying statistics.</p>
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
  }
`;
