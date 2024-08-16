import { FC, useState } from 'react'
import styles from './Slider.module.scss'
import clsx from 'clsx'
import { PreviousBTN } from './previousBTN/PreviousBTN'
import { ForwardBTN } from './forwardBTN/ForwardBTN'

interface ISlider { 
  photo: string[] | undefined
}

const Slider: FC<ISlider> = ({photo}) => {
  const [backAnimationClick, setBackAnimationClick] = useState(false)
  const [forwardAnimationClick, setForwardAnimationClick] = useState(false)
  const [idPrevious, setIdPrevious] = useState(-1)
  const [idForward, setIdForward] = useState(-1)
  const [animationImage, setAnimationImage] = useState(0)

  const [idImg, setIdImg] = useState(0)

  console.log(idPrevious);
  

  const backArrow = () => {
    if (!backAnimationClick) {
      if (photo && idImg == 0) {
        setIdImg(photo?.length-1)
        setIdPrevious(photo?.length-1)
        setBackAnimationClick(true)
        setTimeout(() => {
          setAnimationImage(photo?.length-1)
          setBackAnimationClick(false)
        }, 1000)
      }
      else {
        setIdImg(idImg => idImg - 1)
        setIdPrevious(idImg => idImg - 1)
        setBackAnimationClick(true)
        setTimeout(() => {
          setBackAnimationClick(false)
          setAnimationImage(idImg => idImg - 1)
        }, 1000)
      }

    }
  }

  const forwardArrow = () => {
    if (!forwardAnimationClick) {
      if (photo && idImg == photo.length -1) {
        setIdImg(0)
        setIdForward(0)
        setForwardAnimationClick(true)
        setTimeout(() => {
          setAnimationImage(0)
          setForwardAnimationClick(false)
        }, 1000)
      }
      else {
        setIdImg(idImg => idImg + 1)
        setIdForward(idImg => idImg + 1)
        setForwardAnimationClick(true)
        setTimeout(() => {
          setForwardAnimationClick(false)
          setAnimationImage(idImg => idImg + 1)
        }, 1000)
      }

    }
  }
  
  const clickNavPoint = (index:number) => {
    setIdImg(index)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.img_wrapper}>
        <PreviousBTN backAnimationClick={backAnimationClick} backArrow={backArrow}/>
        
        <ForwardBTN forwardAnimationClick={forwardAnimationClick} forwardArrow={forwardArrow}/>

        <div className={styles.images}>
          {
            photo?.map((img, index) => {
              return <img src={`/img/${img}`} key={index} className={clsx(index === idPrevious ? styles.previous_click : index === idForward && styles.forward_click)}></img>
            })
          }
        </div>

        {photo && <img src={`/img/${photo[animationImage]}`} alt="" className={clsx(backAnimationClick && styles.backAnimation, forwardAnimationClick && styles.forwardAnimation )}/>}


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
