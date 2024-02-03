import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from '../styles/_footer.module.scss' 

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return(
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li><Link to="/" className={styles.footerNavLink}>記事一覧</Link></li>
            <li><Link to="/profile/" className={styles.footerNavLink}>プロフィール</Link></li>
            <li ><Link to="/form/" className={styles.footerNavLink}>お問い合わせ</Link></li>
          </ul>
        </nav>
        <div className={styles.footerCopyright}>
          <small>©copyright 2023-2024 {data.site.siteMetadata.title} All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer