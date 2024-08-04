import { FC, ReactNode } from 'react'
import styles from './Project.module.scss'

interface IProject {
  children: ReactNode
}



const Project:FC<IProject> = ({children}) => {

  const hover = () => {
    console.log('hover');
    
  }

  return (
    <div className={styles.project} onMouseEnter={() => hover()}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.site}>
            <p>nameSitedsdasdasd</p>
            <div className={styles.cross}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
      <div className={styles.description}>
        <div className={styles.open_info}>
          <p>Details</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export { Project }
