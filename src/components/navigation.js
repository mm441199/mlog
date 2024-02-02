import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/_navigation.module.scss'

const Navigation = ({open}) => {
  return (
    <nav aria-expanded={open} className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <Link to ="" className={styles.navigationLink}>記事一覧</Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link to ="/profile/" className={styles.navigationLink}>プロフィール</Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link to ="/form/" className={styles.navigationLink}>お問い合わせ</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;