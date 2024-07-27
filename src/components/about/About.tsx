import styles from './About.module.scss'


const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <h3>Hello, my name is Denis Davidov.</h3>      
        <p>I'm a React-developer with TypeScript from Russia.</p>      
        <p>On this site you can get acquainted with my projects on the link.</p>
        <p>You can also check out my little lab with the code.</p>
        <p>if you have a question: den_davydov_d@vk.com.</p>
      </div>
    </div>
  )
}

export { About }
