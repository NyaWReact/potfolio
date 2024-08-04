import styles from './Portfolio.module.scss'
import { Project } from './project/Project'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.wrapper}>
        <div className={styles.info_page}>
          <h1>My web-portfolio</h1>
          <p className={styles.description}>On this page located my last projects</p>
        </div>
        <div className={styles.projects}>
          <Project>
            <img src="https://www.1zoom.ru/big2/879/277488-Sepik.jpg" alt="" />

          </Project>
          <Project> </Project>
          <Project> </Project>
        </div>
      </div>
    </div>
  )
}

export { Portfolio }
