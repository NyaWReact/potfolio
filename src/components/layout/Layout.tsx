import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Burger from './burger/Burger'
import { useEffect, useState } from 'react'
import { Menu } from './menu/Menu'


const Layout = () => {

  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isAnimation, setIsAnimation] = useState(false)
  const [condition, setCondition] = useState(true)
  const [isAnimationMenu, setIsAnimationMenu] = useState(false)
  useEffect(() => {
    if (isShowMenu) {
      setIsAnimation(true)
    } else if (isAnimation) {
      setTimeout(() => {
        setIsAnimation(false)
      }, 500)
    }
    
  }, [isShowMenu, isAnimation])

  return (
    <div className={styles.layout}>
      <div className={styles.layout_content}>
        <Outlet/> 
      </div>
      <Burger setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} condition={condition} setCondition={setCondition} isAnimationMenu={isAnimationMenu} setIsAnimationMenu={setIsAnimationMenu}/>
      {(isShowMenu || isAnimation) && <Menu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} setCondition={setCondition} isAnimationMenu={isAnimationMenu} setIsAnimationMenu={setIsAnimationMenu}/>}
    </div>
  )
}

export { Layout }
