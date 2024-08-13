import clsx from 'clsx'
import styles from './PreviousBTN.module.scss'
import { FC } from 'react'

interface IPreviousBTN {
  backArrow: () => void
  backAnimationClick: boolean
}

const PreviousBTN:FC<IPreviousBTN> = ({backAnimationClick, backArrow}) => {
  return (
  <button onClick={() => backArrow()} className={styles.back_btn}>
    <div className={clsx(styles.arrow, backAnimationClick && styles.arrow_animation)}/>
  </button>
  )
}

export {PreviousBTN}
