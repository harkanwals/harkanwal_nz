import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const BlogContainer = styled.div`

    justify-content: center;
    flex: column wrap;
    max-width: 760px;
    margin-bottom: 10%;
    padding: 1.2rem;
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <BlogContainer>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </BlogContainer>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html 
            frontmatter {
                title
            }
        }
    }
`