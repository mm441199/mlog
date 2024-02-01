import React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { BsFileEarmarkPost } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa";

import * as styles from '../styles/_sidebar.module.scss' 

const Sidebar = () => {
  // const card = allBlogPost.edges;

  return(
    <aside className={styles.sidebar}>
      <section className={styles.sidebarSection}>
        <div className={styles.sidebarTitle}>
          <FaPenNib />
          <h4>著者</h4>
        </div>
        <div className={styles.author}>
          <div className={styles.authorIcon}>
            <StaticImage src='../images/icon.jpg'></StaticImage>
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>
              <p>Masaki Minamoto</p>
            </div>
            <button className={styles.authorButton}>プロフィール</button>
          </div>
        </div>
        <div className={styles.authorProfile}>
          <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
        </div>
      </section>
      {/* <section className={styles.sidebarSection}>
        <div className={styles.sidebarTitle}>
          <BsFileEarmarkPost />
          <h4>よく読まれている記事</h4>
        </div>
        <ul className={styles.blogCardGrid}>
          {card.map(({ node }) => {
            return (
              <li key={node.slug}>
                <SidebarCard card={node} />
              </li>
            )
          })}
        </ul>
      </section> */}
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
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar