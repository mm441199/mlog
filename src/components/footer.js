import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
      <div className={styles.footerCopyright}>
        <small>©copyright 2023 {data.site.siteMetadata.title}</small>
      </div>
    </footer>
  )
}

export default Footer