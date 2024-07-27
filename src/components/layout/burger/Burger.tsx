import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './Burger.module.scss'
import clsx from 'clsx'


interface IBurger {
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  isShowMenu: boolean
}

const Burger: FC<IBurger> = ({setIsShowMenu, isShowMenu}) => {
  const [isTop, setIsTop] = useState(false)
  const [isAnimation, setIsAnimation] = useState(false)

  const clickBurger = () => {
    if (!isAnimation) {
      setIsAnimation(true)
      setIsShowMenu((state) => !state )
      setTimeout(() => {
        setIsTop(top => !top)
        setIsAnimation(false)
      }, 900)
    }
  }

  console.log(isShowMenu);
  
  return (
    <div className={styles.burger} onClick={() => clickBurger()}>
      <div className={clsx(styles.top_first, isShowMenu ? (isTop ? styles.top_second : styles['isOpen']) : styles['isClose'])}></div>
      <div className={clsx(styles.middle_first, isShowMenu ? (isTop ? styles.middle_second : styles['isOpen']) : styles['isClose'])}></div>
      <div className={clsx(styles.bottom_first, isShowMenu ? (isTop ? styles.bottom_second : styles['isOpen']) : styles['isClose'])}></div>

    </div>
  )
}

export default Burger
