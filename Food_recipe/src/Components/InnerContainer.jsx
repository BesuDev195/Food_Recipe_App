import React from 'react'
import styles from "./InnerContainer.module.css"

export default function InnerContainer({children}) {
  return (
    <div className={styles.InnerContainer}>{children}</div>
  )
}
