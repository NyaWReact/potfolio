import {useEffect, useState } from 'react'
import { IProjectInfo } from '../portfolio/interfaceProject'
import styles from './SinglePortfolioProject.module.scss'

import { useParams } from 'react-router-dom'
import { Slider } from './slider/Slider'


const SinglePortfolioProject = () => {

  const myProjects = [
    {
      name: 'games',
      smallDescription: 'sDes',
      img: [
        'games_1.webp',
        'games_2.webp',
        'games_3.webp',
      ],
      description: 'description',
      stack: [
        '1',
        '2'
      ]
    }, 
    {
      name: '123',
      smallDescription: 'sDes',
      img: [
     'games_1.webp',
        'games_2.webp',
        'games_3.webp',
      ],
      description: 'description',
      stack: [
        '1',
        '2'
      ]
    },
    {
      name: 'dasdass',
      smallDescription: 'sDes',
      img: [
       'games_1.webp',
      ],
      description: 'description',
      stack: [
        '1',
        '2'
      ]
    }
  ]

  const {name} = useParams()
  const [project, setProject] = useState<IProjectInfo>()
  useEffect(() => {
    if (myProjects) {
      const project = myProjects.filter((project:IProjectInfo) => project.name === name)[0] 
      setProject(project)
    } 
  }, [name])
  
  
  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>  
        <div className={styles.header}>
          <h1>{project?.name}</h1>
          <h2 className={styles.smallDescription}>{project?.smallDescription}</h2>
        </div>
        <Slider photo={project?.img}/>
      </div>
    </div>
  )
}

export {SinglePortfolioProject}
