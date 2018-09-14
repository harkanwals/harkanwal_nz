import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div>
    <h5>About me & etc</h5>
    <p>I analyse and communicate data</p>
    </div>
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
