import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

import * as styles from "../styles/_blog-category.module.scss"

const BlogTagPage = ({ 
  data: { allContentfulBlog }, pageContext
}) => {
  const edges = allContentfulBlog.edges;
  const tag = pageContext.tags;
  
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.container}>
          <main className={styles.main}>
            <section className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>{tag}</h3>
              <ul className={styles.blogCardGrid}>
                {edges.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <Card card={node} />
                    </li>
                  )
                })}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  )
} 

export const query = graphql`
  query(
    $tags: String
  ) {
  allContentfulBlog(filter: {tags: {eq: $tags }}, sort: {publishDate: DESC}) {
    edges {
      node {
        slug
        title
        heroImage {
          gatsbyImage(width: 200)
          gatsbyImageData
        }
        publishDate(formatString: "YYYY/MM/DD")
        tags
      }
    }
  }
}
`
export default BlogTagPage