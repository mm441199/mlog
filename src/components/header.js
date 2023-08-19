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
        <div>
            <Link to="/" className={styles.siteTopLink}>
              <h1 className={styles.siteTitle}>
                {data.site.siteMetadata.title}
              </h1>
              <span>技術記事とときどき旅行記</span>
            </Link>
        </div>
        <nav className={styles.headerNav}> 
          <ul className={styles.headerUl}>
            <Link to="http://localhost:8000/blog-post-tech/" className={styles.headerLink}><li className={styles.headerLi}>tech blog</li></Link>
            <Link to="http://localhost:8000/blog-post-daily/" className={styles.headerLink}><li className={styles.headerLi}>daily blog</li></Link>
            <Link to="" className={styles.headerLink}><li className={styles.headerLi}>works</li></Link>
            <Link to="http://localhost:8000/form/" className={styles.headerLink}><li className={styles.headerLi}>contact</li></Link>
          </ul>
        </nav>
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