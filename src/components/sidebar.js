import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
// import { BsFileEarmarkPost } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaShopify } from "react-icons/fa6";

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
        <div className={styles.avatar}>
          <StaticImage src='../images/avatar.jpg' className={styles.avatarImage}></StaticImage>
          <div className={styles.avatarInfo}>
            <div className={styles.avatarName}>
              <p>Masaki Minamoto</p>
            </div>
            <Link to="/"  className={styles.avatarSnsLink}><IoLogoGithub /></Link>
          </div>
        </div>
        <div className={styles.avatarProfile}>
          <p>Shopifyを使ったECサイト構築メインのエンジニア | 趣味はインテリア🛋️（元販売員）と民族音楽の演奏🇵🇪🇧🇴</p>
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
      <section className={styles.sidebarSection}>
        <div className={styles.sidebarTitle}>
          <FaShopify />
          <h4>Shopifyサイト</h4>
        </div>
        <div className={styles.shopify}>
          <Link to="https://katachionline.net" className={styles.shopifyImageLink}>
            <StaticImage
              src='../images/katachi-onlinestore-image.png'
            />
          </Link>
          <Link to="https://katachionline.net" className={styles.shopifyTextLink}><h5 className={styles.shopifyShopName}>ジュエリーショップ「Katachi」</h5></Link>
          <p className={styles.shopifyText}>当ブログでご紹介している内容はこちらのサイトで確認が可能です👀</p>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar