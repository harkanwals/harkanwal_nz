import React from "react";
import PageTransition from "gatsby-plugin-page-transitions";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Work = props => (
  <PageTransition>
    <Layout>
      <div>Work goes here</div>
      <Link to="/">Home</Link>
    </Layout>
  </PageTransition>
);

export default Work;
