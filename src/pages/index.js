import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import Sidebar from "../components/sidebar"

import Seo from "../components/seo"
import * as styles from "../styles/_base.module.scss"

const IndexPage = ({ 
  data: { allBlog }  
}) => {
  const allBlogPost = allBlog.edges;

  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.container}>
          <main className={styles.main}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>記事一覧</h2>
              <ul className={styles.blogCardGrid}>
                {allBlogPost.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <Card card={node} />
                    </li>
                  )
                })}
              </ul>
            </section>
          </main>
          <Sidebar className={styles.sidebar} /> 
        </div>
      </div>
    </Layout>
  )
} 

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query {
  allBlog: allContentfulBlog(limit: 1000, sort: {publishDate: DESC}) {
    edges {
      node {
        slug
        title
        heroImage {
          gatsbyImage(width: 100)
          gatsbyImageData
        }
        publishDate(formatString: "YYYY/MM/DD")
        tags
      }
    }
  }
}
`