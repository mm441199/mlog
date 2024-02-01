import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from '../styles/_sidebar-card.module.scss'

const SidebarCard = ({ card }) => {
  const postLink = `/post/${ card.slug }/`

  return(
    <Link to={ postLink } className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardThumbnail}>
          <GatsbyImage
            image={card.heroImage.gatsbyImageData}
            alt={card.heroImage.title}
            className={styles.cardImage}
          />
        </div>
        <h3 className={styles.cardTitle}>{card.title}</h3>
      </div>
    </Link>
  )
}

export default SidebarCard