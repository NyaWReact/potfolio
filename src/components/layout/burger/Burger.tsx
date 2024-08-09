import { Dispatch, FC, SetStateAction} from 'react'
import styles from './Burger.module.scss'
import clsx from 'clsx'
import { useBurger } from './useBurger'


interface IBurger {
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  isShowMenu: boolean
  condition: boolean
  setCondition: Dispatch<SetStateAction<boolean>>
  setIsAnimationMenu: Dispatch<SetStateAction<boolean>>
  isAnimationMenu: boolean
}

const Burger: FC<IBurger> = ({setIsShowMenu, isShowMenu, condition, setCondition, setIsAnimationMenu, isAnimationMenu}) => {
  const {activeBurger } = useBurger({isShowMenu, setIsShowMenu, setCondition, setIsAnimationMenu, isAnimationMenu})

  return (
    <div className={styles.burger} onClick={() => activeBurger()}>
      <div className={clsx(styles.top, condition ? [styles.top_first, isAnimationMenu && styles['isOpen']] :  [styles.top_second, isAnimationMenu && styles['isClose']])}></div>
      <div className={clsx(styles.middle, condition ? [styles.middle_first, isAnimationMenu && styles['isOpen']] : [styles.middle_second, isAnimationMenu && styles['isClose']])}></div>
      <div className={clsx(styles.bottom, condition ? [styles.bottom_first, isAnimationMenu && styles['isOpen']] :  [styles.bottom_second, isAnimationMenu && styles['isClose']])}></div>
    </div>
  )
}

export default Burger
