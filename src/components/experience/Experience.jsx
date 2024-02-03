import React from 'react'
import styles from './experienceSection.module.css';

const Experience = () => {
 const experiences = [
  {
   title: ' Java Full-Stack Developer',
   company: 'PwC India',
   duration: 'August 2023 - Present',
   description: 'Worked on developing and maintaining web applications using React.js, Node.js, Java-Springboot, MySQLand MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  },
  {
   title: 'Frontend Developer',
   company: 'Avyya - Iselo Technology Pvt. Ltd.',
   duration: 'March 2023 - July 2023',
   description: 'Contributed to the development of Frontend of Avyya using React.js and Polaris.'
  },
  {
   title: 'React Js Developer',
   company: 'Relevel by Unacademy',
   duration: 'September 2022 - December 2022',
   description: 'Contributed to the development of Frontend of Relevel using React.js.'
  },
 ];
 return (
  <div className={styles.container}>
  <h1 className={styles.title}>Experience</h1>
  <ul className={styles._ul}>
    {experiences.map((experience) => (
      <li key={experience.duration} className={styles.experienceItem}>
        <h3>{experience.title}</h3>
        <p className={styles.company}>{experience.company}</p>
        <p className={styles.duration}>{experience.duration}</p>
        <p className={styles.description}>{experience.description}</p>
      </li>
    ))}
  </ul>
</div>
 )
}

export default Experience
