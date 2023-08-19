import React from "react"
import * as styles from '../styles/_table-of-content.module.scss'

const Toc =  props  => {
  return (
    <div className={styles.tableOfContent}>
      <div 
        dangerouslySetInnerHTML={{__html: props.data,}}>
      </div>
    </div>
  )
}
export default Toc