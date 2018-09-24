import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";
import Layout from "../components/layout";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return <div>
    <Layout>
    {Posts}
    </Layout>
    </div>
};

export default BlogPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YY")
                        
                        title
                    }
                }
            }
        }
    }
`
