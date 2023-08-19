import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

import "prismjs/themes/prism-tomorrow.css"
import "../styles/syntax-highlight.css"
// import { FiClock} from "react-icons/fi"
import Toc from '../components/table-of-content'

import * as styles from '../styles/_blog-post.module.scss'

const BlogPost = ({ data: { contentfulBlog, allContentfulBlog, toc} }) => {
  const post = contentfulBlog;
  const nodeList = allContentfulBlog.edges;
  const tocList = toc.edges;
  console.log(tocList);

  return (
    <Layout>
      <div className={styles.blogPostPage}>
        <div className={styles.content}>
          <main className={styles.mainContents}>
            <span className={styles.blogPostCategory}>ー TECH BLOG ー</span>
            <h2 className={styles.blogPostTitle}>{post.title}</h2>
            <div>
              {post.tags &&
                post.tags.map(tag => (
                  <p key={tag} className={styles.blogPostTags}>
                    <StaticImage 
                      alt="タグアイコン"
                      src="../images/tag-icon.svg"
                      className={styles.tagIcon}
                    />
                    {tag}
                  </p>
              ))}
            </div>
            <div className={styles.blogPostThumbnail}>
              <GatsbyImage
                image={post.heroImage.gatsbyImageData}
                alt={post.heroImage.title}
              />
            </div>
            <div
              className={styles.blogPostText}
              dangerouslySetInnerHTML={{ __html: contentfulBlog.childContentfulBlogContentTextNode.childMarkdownRemark.html }}
            />
          </main>
          <aside className={styles.sidebar}>
            {/* <section className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>検索</h4>
            </section> */}
            <section className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>Author</h4>
              <div className={styles.author}>
                <div className={styles.authorImageCircle}>
                  <StaticImage 
                    alt="ブログ筆者イメージ画像"
                    src="../images/icon.jpg"
                    className={styles.authorImage}
                  />
                </div>
                <div className={styles.authorBody}>
                  <p className={styles.authorName}>smnk_00</p>
                </div>
              </div>
            </section>
            <section className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>目次</h4>
              {tocList.map(({ node }) => {
                return(
                  <Toc data={node.childContentfulBlogContentTextNode.childMarkdownRemark.tableOfContents} />
                )
              })}
            </section>
            <section className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>よく読まれている記事</h4>
              <ul className={styles.latestPosts}>
                {nodeList.map(({node }) => {
                  return (
                    <li key={node.path} className={styles.latestPostsItem}>
                      <div className={styles.latestPostsThumbnail}>
                        <GatsbyImage
                          image={node.heroImage.gatsbyImageData}
                          alt={node.heroImage.title}
                          className={styles.latestPostsImage}
                        />
                      </div>
                      <h4 className={styles.latestPostsTitle}>{node.title}</h4>
                    </li>
                  )
                })}
              </ul>
            </section>
            {/* <section className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>よく検索されているワード</h4>
            </section> */}
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
    }
    allContentfulBlog(limit: 3) {
      edges {
        node {
          title
          heroImage {
            gatsbyImage(width: 100)
            gatsbyImageData
          }
        }
      }
    }
    toc: allContentfulBlog(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          childContentfulBlogContentTextNode {
            childMarkdownRemark {
              tableOfContents
            }
          }
        }
      }
    }
  }
`
export default BlogPost