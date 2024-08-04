import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.scss'
import clsx from 'clsx'
import { Dispatch, FC, SetStateAction} from 'react'
import { useBurger } from '../burger/useBurger'

interface IMenu {
  isShowMenu: boolean
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  setCondition: Dispatch<SetStateAction<boolean>>
  setIsAnimationMenu: Dispatch<SetStateAction<boolean>>
  isAnimationMenu: boolean
} 

const Menu: FC<IMenu> = ({isShowMenu, setIsShowMenu, setCondition, setIsAnimationMenu, isAnimationMenu }) => {
  const {pathname} = useLocation()

  const { activeBurger } = useBurger({isShowMenu, setCondition, setIsShowMenu, setIsAnimationMenu, isAnimationMenu})

  const onClickLink = () => {
    activeBurger()
  } 


  return (
    <div className={clsx(styles.menu, isShowMenu ? styles['open'] : styles['close'])}>
      <nav className={styles.nav}>
        <Link to={'/'} className={clsx(styles.nav_item, pathname=== '/' && styles.nav_item_active, styles.appear_fourth)} onClick={() => onClickLink()}>
          <span>about</span>
        </Link>
        <Link to={'/portfolio'} className={clsx(styles.nav_item, pathname=== '/portfolio' && styles.nav_item_active, styles.appear_third)} onClick={() => onClickLink()}>
          <span>portfolio</span>
        </Link>
        <Link to={'/lab'} className={clsx(styles.nav_item, pathname=== '/lab' && styles.nav_item_active, styles.appear_second)} onClick={() => onClickLink()}>
          <span>lab</span>
        </Link>
        <Link to={'/contact'} className={clsx(styles.nav_item, pathname=== '/contact' && styles.nav_item_active, styles.appear_first)} onClick={() => onClickLink()}>
          <span>contact</span>
        </Link>
      </nav>
    </div>
  )
}

export { Menu }
