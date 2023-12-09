import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { IoCalendarSharp } from "react-icons/io5";

import * as styles from '../styles/_card.module.scss'


const PostCard = ({ card }) => {
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
            <div className={styles.cardInfo}>
              <IoCalendarSharp className={styles.cardInfoIcon} />
              <div className={styles.cardInfoText}>
                <p className={styles.cardPublishDate}>{ card.publishDate }</p>
                {/* <p className={styles.cardInfoReadTime}>5 min read</p> */}
                <p>{ card.timeRequired }</p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard