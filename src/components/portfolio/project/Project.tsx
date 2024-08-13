import { FC } from 'react'
import styles from './Project.module.scss'
import { useNavigate } from 'react-router-dom'
import { IProjectInfo } from '../interfaceProject'

interface IProject {

  project: IProjectInfo
}



const Project:FC<IProject> = ({ project}) => {

  const hover = () => {
    console.log('hover');
    
  }
  const nav = useNavigate()

  const handleRoute = () => {
    nav( `${project.name}`)
  }

  return (
    <div className={styles.project} onMouseEnter={() => hover()} onClick={() => handleRoute()}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.site}>
            <p>{project.name}</p>
            <div className={styles.cross}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
            <img src={`/img/${project.img[0]}`} alt="" />
        </div>
      <div className={styles.description}>
        <div className={styles.open_info}>
          <p className={styles.text_details}>Details</p>

        </div>
      </div>
      </div>
    </div>
  )
}

export { Project }
