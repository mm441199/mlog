import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card-sidebar'

import "prismjs/themes/prism-tomorrow.css"
import "../styles/syntax-highlight.css"
import * as styles from '../styles/_blog-post.module.scss'
import '../styles/table-of-contents.css'

import { BsFileEarmarkPost } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";

const BlogPost = ({ data: { contentfulBlog, forCard }}) => {
  const post = contentfulBlog;
  const card = forCard.edges;

  return (
    <Layout>
      <div className={styles.blogPostPage}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.blogPostMeta}>
              <p className={styles.blogPostDate}>公開日：{ post.createdAt }</p>
              <ul className={styles.blogPostTag}>
                {post.tags.map(tag => {
                  const tagLink = `/tags/${tag}/`
                  return(
                    <li>
                      <Link to={tagLink} className={styles.blogPostTagLink}>{tag}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <h2 className={styles.blogPostTitle}>{post.title}</h2>
            <div
              className={styles.blogPostText}
              dangerouslySetInnerHTML={{ __html: contentfulBlog.childContentfulBlogContentTextNode.childMarkdownRemark.html }}
            />
          </main>
          <aside className={styles.sidebar}>
            <section className={styles.sidebarSection}>
              <div className={styles.sidebarTitle}>
                <BsFileEarmarkPost />
                <h4>よく読まれている記事</h4>
              </div>
              <ul className={styles.blogCardGrid}>
                {card.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <Card card={node} />
                    </li>
                  )
                })}
              </ul>
            </section>
            <section className={styles.sidebarSection}>
              <div className={styles.sidebarTitle}>
                <BiSolidCategory />
                <h4>カテゴリー</h4>
              </div>
              <ul className={styles.category}>
                <li><Link to="/" className={styles.categoryItem}>all</Link></li>
                <li><Link to="/tags/shopify/" className={styles.categoryItem}>shopify</Link></li>
                <li><Link to="/tags/liquid/" className={styles.categoryItem}>liquid</Link></li>
                <li><Link to="/tags/gatsby/" className={styles.categoryItem}>gatsby</Link></li>
                <li><Link to="/tags/contentful/" className={styles.categoryItem}>contentful</Link></li>
                <li><Link to="/" className={styles.categoryItem}>design</Link></li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query(
    $slug: String
  ) {
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      heroImage {
        gatsbyImage(width: 100)
        gatsbyImageData
      }
      tags
      childContentfulBlogContentTextNode {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "yyyy-MM-DD")
      publishDate(formatString: "yyyy-MM-DD")
    }
    forCard: allContentfulBlog(limit: 5) {
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
export default BlogPost