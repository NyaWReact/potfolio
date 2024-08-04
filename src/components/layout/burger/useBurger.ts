import { Dispatch, SetStateAction, useEffect } from "react"

interface IUseBurger {
  isShowMenu: boolean
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
  setCondition: Dispatch<SetStateAction<boolean>>
  setIsAnimationMenu: Dispatch<SetStateAction<boolean>>
  isAnimationMenu: boolean
}

interface IUseBurgerReturn {
  activeBurger: () => void
}


export const useBurger= ({isShowMenu, setIsShowMenu, setCondition, isAnimationMenu, setIsAnimationMenu}: IUseBurger): IUseBurgerReturn => {

  const activeBurger = () => {
    if (!isAnimationMenu) {
      setIsAnimationMenu(true)
      setIsShowMenu((state) => !state )
      setTimeout(() => {
        setIsAnimationMenu(false) 
        setCondition(condition => !condition)
      }, 880)
    }
  }


  useEffect(() => {
    if (isShowMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isShowMenu])

  return {activeBurger}

}