import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Burger from './burger/Burger'
import { useState } from 'react'


const Layout = () => {

  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <div className={styles.layout}>
      <div className={styles.layout_content}>
        <Outlet/> 
      </div>
      <Burger setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu}/>
    </div>
  )
}

export { Layout }
