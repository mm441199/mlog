import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from '../styles/_card.module.scss'

const Card = ({ card }) => {
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
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <div className={styles.cardMeta}>
            <ul className={styles.cardTag}>
              {card.tags.map(tag => {
                const tagLink = `/tags/${tag}`

                return(
                  <li className={styles.cardTagItem}>
                    <Link to={tagLink} className={styles.cardTagLink}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
            <p className={styles.cardPublishDate}>{ card.publishDate }</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card