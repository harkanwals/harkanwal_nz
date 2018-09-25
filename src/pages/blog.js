import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const PostName = styled.p`
  font-size: 1.5rem;
  font-family: "Montserrat";
`;

const PostExcerpt = styled.div`
  max-width: 700px;
`;



export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <PostName>{node.frontmatter.title}</PostName>
              <PostExcerpt>
                <p>{node.excerpt}</p>
              </PostExcerpt>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM, YY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
