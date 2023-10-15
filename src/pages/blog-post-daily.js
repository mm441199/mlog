import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'

import * as styles from '../styles/_blog-post-daily.module.scss'

const BlogPostDaily = ({ 
  data: { dailyBlog }
}) => {
  const dailyBlogPost = dailyBlog.edges;

  return(
    <Layout>
      <main className={styles.mainContents}>
        <h2 className={styles.pageTitle}>DAILY BLOG</h2>
        <ul className={styles.blogCardGrid}>
          {dailyBlogPost.map(({ node }) => {
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
    dailyBlog: allContentfulBlog(filter: {tags: {eq: "Daily blog"}}) {
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
export default BlogPostDaily