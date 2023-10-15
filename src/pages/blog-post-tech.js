import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'

import * as styles from '../styles/_blog-post-tech.module.scss'

const BlogPostTech = ({ 
  data: { techBlog }
}) => {
  const techBlogPost = techBlog.edges;

  return(
    <Layout>
      <main className={styles.mainContents}>
        <h2 className={styles.pageTitle}>TECH BLOG</h2>
        <ul className={styles.blogCardGrid}>
          {techBlogPost.map(({ node }) => {
            return (
              <li key={node.slug}>
                <Card card={node} />
              </li>
            )
          })}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    techBlog: allContentfulBlog(filter: {tags: {eq: "Tech blog"}}) {
      edges {
        node {
          slug
          title
          heroImage {
            gatsbyImage(width: 100)
            gatsbyImageData
          }
        }
      }
    }
  }
`
export default BlogPostTech