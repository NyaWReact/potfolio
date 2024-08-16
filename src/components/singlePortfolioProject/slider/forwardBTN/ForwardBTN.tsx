import { FC } from 'react'
import styles from './ForwardBTN.module.scss'
import clsx from 'clsx'

interface IForwardBTN {
  forwardArrow: () => void
  forwardAnimationClick: boolean
}

const ForwardBTN: FC<IForwardBTN> = ({forwardAnimationClick, forwardArrow}) => {
  return (
    <button onClick={() => forwardArrow()} className={styles.forward_btn}>
      <div className={clsx( styles.arrow, forwardAnimationClick && styles.arrow_animation )}/>
    </button>
  )
}

export { ForwardBTN }
