import React from 'react'
import * as styles from '../styles/_header-menu-button.module.scss'

const HeaderMenuButton = ({onClick, open}) => {
  return (
    <button 
      onClick={onClick}  
      aria-expanded={open}
      className={styles.headerMenuButton}
    >
      <span className={styles.headerMenuButtonItem}></span>
      <span className={styles.headerMenuButtonItem}></span>
      <span className={styles.headerMenuButtonItem}></span>
    </button>
  );
};

export default HeaderMenuButton;