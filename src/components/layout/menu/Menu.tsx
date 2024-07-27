import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.scss'
import clsx from 'clsx'
import { FC } from 'react'

interface IMenu {
  isShowMenu: boolean
  isAnimation: boolean
}

const Menu: FC<IMenu> = ({isShowMenu, isAnimation}) => {
  const {pathname} = useLocation()

  console.log(isAnimation, isShowMenu);
  
  return (
    <div className={clsx(styles.menu, isShowMenu ? styles['open'] : styles['close'])}>
      <nav className={styles.nav}>
        <Link to={'/'}className={clsx(styles.nav_item, pathname=== '/' && styles.nav_item_active, styles.appear_fourth)}>
          <span>about</span>
        </Link>
        <Link to={'#'}className={clsx(styles.nav_item, pathname=== '/portfolio' && styles.nav_item_active, styles.appear_third)}>
          <span>portfolio</span>
        </Link>
        <Link to={'#'}className={clsx(styles.nav_item, pathname=== '/lab' && styles.nav_item_active, styles.appear_second)}>
          <span>lab</span>
        </Link>
        <Link to={'#'}className={clsx(styles.nav_item, pathname=== '/contact' && styles.nav_item_active, styles.appear_first)}>
          <span>contact</span>
        </Link>
      </nav>
    </div>
  )
}

export { Menu }
