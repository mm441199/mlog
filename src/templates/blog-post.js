import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import "prismjs/themes/prism-tomorrow.css"
import "../styles/syntax-highlight.css"
import * as styles from '../styles/_blog-post.module.scss'
import '../styles/table-of-contents.css'

const BlogPost = ({ data: { contentfulBlog }}) => {
  const post = contentfulBlog;

  return (
    <Layout>
      <div className={styles.blogPostPage}>
        <div className={styles.container}>
          <main className={styles.main}>
              <p className={styles.blogPostDate}>公開日：{ post.createdAt }</p>
            <h2 className={styles.blogPostTitle}>{post.title}</h2>
            <div className={styles.blogPostMeta}>
              <ul className={styles.blogPostTag}>
                {post.tags.map(tag => {
                  const tagLink = `/tags/${tag}/`
                  return(
                    <li className={styles.blogPostTagItem}>
                      <Link to={tagLink} className={styles.blogPostTagLink}>{tag}</Link>
                  </li>
                  )
                })}
              </ul>
            </div>
            <GatsbyImage
              image={post.heroImage.gatsbyImageData}
              alt={post.heroImage.title}
            />
            <div
              className={styles.blogPostText}
              dangerouslySetInnerHTML={{ __html: contentfulBlog.childContentfulBlogContentTextNode.childMarkdownRemark.html }}
            />
          </main>
          <Sidebar />
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
        title
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
  }
`
export default BlogPost