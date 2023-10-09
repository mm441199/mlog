import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Card from "../components/card"
import Seo from "../components/seo"
import * as styles from "../styles/_base.module.scss"

const IndexPage = ({ 
  data: { dailyBlog, techBlog} 
}) => {
  const dailyBlogPost = dailyBlog.edges;
  const techBlogPost = techBlog.edges;

  return (
    <Layout>
      <div className={styles.introduction}>
        <div className={styles.heroThumbnail}>
          <StaticImage
            src="../images/landscape_setouchi.jpg"
            alt="setouchi"
            className={styles.heroImage}
          />
          <span className={styles.heroCaption}>Date - 2023.02.17 | Spot - Naoshima</span>
        </div>
      </div>
      <main className={styles.mainContents}>
        <section className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}>tech blog</h3>
          <ul className={styles.blogCardGrid}>
            {techBlogPost.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Card card={node} />
                </li>
              )
            })}
          </ul>
          <div className={styles.sectionButton}>
            <Link to="https://ec-mlog.com/blog-post-tech/"><button className={styles.readMoreButton}>TECH BLOGをもっとみる</button></Link>
          </div>
         </section>
        <section className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}>daily blog</h3>
          <ul className={styles.blogCardGrid}>
            {dailyBlogPost.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Card card={node} />
                </li>
              )
            })}
          </ul>
          <div className={styles.sectionButton}>
            <Link to="https://ec-mlog.com/blog-post-daily/"><button className={styles.readMoreButton}>DAILY BLOGをもっとみる</button></Link>
          </div>
         </section>
      </main>
    </Layout>
  )
} 


export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query {
  dailyBlog: allContentfulBlog(limit: 6, filter: {tags: {eq: "Daily blog"}}) {
    edges {
      node {
        slug
        title
        heroImage {
          gatsbyImage(width: 100)
          gatsbyImageData
        }
        tags
      }
    }
  }
  techBlog: allContentfulBlog(limit: 12, filter: {tags: {eq: "Tech blog"}}) {
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