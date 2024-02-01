import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/_navigation.module.scss'

const Navigation = ({open}) => {
  return (
    <nav className={styles.headerMenuNavigation}>
    {/* <nav aria-expanded={open} className={styles.headerMenuNavigation}> */}
      <ul className={styles.headerMenuNavigationList}>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="" className={styles.headerMenuNavigationListItemLink}>HOME</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="/tags/shopify/" className={styles.headerMenuNavigationListItemLink}>shopify</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="/tags/liquid/" className={styles.headerMenuNavigationListItemLink}>liquid</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="/tags/gatsby/" className={styles.headerMenuNavigationListItemLink}>gatsbyJS</Link>
        </li>
        <li className={styles.headerMenuNavigationListItem}>
          <Link to ="/form/" className={styles.headerMenuNavigationListItemLink}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;