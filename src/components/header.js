import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import HeaderMenuButton from '../components/header-menu-button'
import Navigation from '../components/navigation'

import * as styles from '../styles/_header.module.scss' 

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuOpenFunction = () => {
    setOpen((prevState) => !prevState);
  };

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
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.headerHomeLink}>
          <h1 className={styles.headerTitle}>MLOG.</h1>
          <p className={styles.headerSubTitle}>Shopify・Liquidメインの技術ブログ</p>
        </Link>
        <HeaderMenuButton 
          open={open}
          onClick={menuOpenFunction}
        />
        <Navigation 
          open={open}
        />
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li><Link to="/" className={styles.headerNavLink}>記事一覧</Link></li>
            <li><Link to="/profile/" className={styles.headerNavLink}>プロフィール</Link></li>
            <li ><Link to="/form/" className={styles.headerNavLink}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header