import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/_navigation.module.scss'

const Navigation = ({open}) => {
  return (
    <nav aria-expanded={open} className={styles.headerMenuNavigation}>
      <ul className={styles.headerMenuNavigationList}>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="https://ec-mlog/blog-post-tech/" className={styles.headerMenuNavigationListItemLink}>TECH BLOG</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="https://ec-mlog/blog-post-daily/" className={styles.headerMenuNavigationListItemLink}>DAILY BLOG</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="/" className={styles.headerMenuNavigationListItemLink}>WORKS</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="https://ec-mlog/form/" className={styles.headerMenuNavigationListItemLink}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;