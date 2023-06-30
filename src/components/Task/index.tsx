import { TbTrash } from 'react-icons/tb'

import styles from './task.module.css'

export function Task() {
  return (
    <div className={styles.task} >
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus modi alias, vitae atque quasi tempora vel nihil porro illum cumque?
      </p>

      <button className={styles.deleteButton} >
        <TbTrash size={20} />
      </button>
    </div>
  )
}