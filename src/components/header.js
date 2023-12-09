import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image"

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
 
        {/* <nav className={styles.headerNav}> 
          <ul className={styles.headerUl}>
          <Link to="https://ec-mlog.com/blog-post-tech/" className={styles.headerLink}><li className={styles.headerLi}>tech blog</li></Link>
          <Link to="https://ec-mlog.com/blog-post-daily/" className={styles.headerLink}><li className={styles.headerLi}>daily blog</li></Link>
          <Link to="" className={styles.headerLink}><li className={styles.headerLi}>works</li></Link>
          <Link to="https://ec-mlog.com/form/" className={styles.headerLink}><li className={styles.headerLi}>contact</li></Link>
          </ul>
        </nav> */}
        <Link to="/" className={styles.headerLink}>
          <StaticImage src='../images/mlog-logo.png' aly='mlogのロゴ' className={styles.headerLogo} />
          <h1 className={styles.headerTitle}>MLOG</h1>
        </Link>
        <HeaderMenuButton 
          open={open}
          onClick={menuOpenFunction}
        />
        <Navigation 
          open={open}
        />
      </div>
    </header>
  )
}

export default Header