import { useEffect, useState } from 'react'
import styles from './Portfolio.module.scss'
import { Project } from './project/Project'
import { myProjects } from '/public/DataBase/MyProject'
import { IProjectInfo } from './interfaceProject'


const Portfolio = () => {

  const [myProject, setMyProject] = useState<IProjectInfo[]>()

  useEffect(() => {
    setMyProject(myProjects)
  }, [])
  console.log(myProject);
  
  return (
    <div className={styles.portfolio}>
      <div className={styles.wrapper}>
        <div className={styles.info_page}>
          <h1>My web-portfolio</h1>
          <p className={styles.description}>On this page located my last projects</p>
        </div>
        <div className={styles.projects}>
          {
            myProject?.map((project) => {
              return (<Project project={project} key={project.name}/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export { Portfolio }
