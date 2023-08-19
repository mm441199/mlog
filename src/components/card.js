import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/_card.module.scss'


const PostCard = ({ card }) => {
  const pageLink = `/post/${ card.slug }/`

  return(
    <Link to={pageLink} className={styles.cardLink}>
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
        </div>
      </div>
    </Link>
  )
}

export default PostCard