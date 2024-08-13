import { FC, useState } from 'react'
import styles from './Slider.module.scss'
import clsx from 'clsx'
import { PreviousBTN } from './previousBTN/PreviousBTN'

interface ISlider { 
  photo: string[] | undefined
}

const Slider: FC<ISlider> = ({photo}) => {
  const [backAnimationClick, setBackAnimationClick] = useState(false)
  const [idPrevious, setIdPrevious] = useState(-1)

  const [idImg, setIdImg] = useState(0)

  console.log(idPrevious);
  const forwardArrow = () => {
    if (photo && idImg == photo?.length - 1) {
      setIdImg(0)
    }
    else {
      setIdImg(idImg => idImg + 1)


    }

  }

  const backArrow = () => {
    if (photo && idImg == 0) {
      setIdImg(photo?.length-1)
      setIdPrevious(photo?.length-1)
      setBackAnimationClick(true)
      setTimeout(() => {
        setBackAnimationClick(false)
      }, 1000)
    }
    else {
      setIdImg(idImg => idImg - 1)
      setIdPrevious(idImg => idImg - 1)
      setBackAnimationClick(true)
      setTimeout(() => {
        setBackAnimationClick(false)
      }, 1000)
    }
  }
  
  const clickNavPoint = (index:number) => {
    setIdImg(index)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.img_wrapper}>
        <PreviousBTN backAnimationClick={backAnimationClick} backArrow={backArrow}/>
        <button onClick={() => forwardArrow()} className={styles.forward_btn}>
          <div className={styles.arrow}/>
        </button>

        <div className={styles.previous_images}>
          {
            photo?.map((img, index) => {
              return <img src={`/img/${img}`} key={index} className={clsx(index === idPrevious && styles.previous_click)}></img>
            })
          }
        </div>

        {photo && <img src={`/img/${photo[idImg]}`} alt="" className={clsx(backAnimationClick && styles.backAnimation)}/>}

      </div>




      <div className={styles.nav_bar_img}>
        {
          photo?.map((_, index) => {            
            return (<button className={styles.wrapper_point} key={index} onClick={() => clickNavPoint(index)}><div className={clsx(styles.point,idImg === index ? styles.active_point : styles.disabled_point)}/></button>)
          })
        }
      </div>
    </div>
  )
}

export { Slider }
