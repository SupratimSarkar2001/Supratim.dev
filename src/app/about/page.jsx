"use client"
import React from 'react'
import styles from "./about.module.css"
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';

const AboutPage = () => {
  const resumeLink="https://drive.google.com/file/d/1ucybMziCuD6EYYtAQWxVPcvZRIo3D6pP/view";
  const handleOnClickResume=()=>{
     window.open(resumeLink,"_blank");
  }
  const techStackIcons = [
    "https://techstack-generator.vercel.app/js-icon.svg",
    "https://techstack-generator.vercel.app/react-icon.svg",
    "https://techstack-generator.vercel.app/redux-icon.svg",
    "https://techstack-generator.vercel.app/webpack-icon.svg",
    "https://techstack-generator.vercel.app/prettier-icon.svg",
    "https://techstack-generator.vercel.app/restapi-icon.svg",
    "https://techstack-generator.vercel.app/github-icon.svg",
    "https://techstack-generator.vercel.app/mysql-icon.svg",
    "https://techstack-generator.vercel.app/nginx-icon.svg",
    "https://techstack-generator.vercel.app/java-icon.svg",
  ];
  return (
    <div className={styles.container}>
       <button className={styles.button} onClick={handleOnClickResume}>Grab my Resume</button>
       <h1 className={styles.title}>Hi! I am Supratim Sarkar</h1>
       <p className={styles.desc}>Experienced full-stack developer proficient in React.js,Next.js,Node js, Spring Boot,MongoDB and MySQL. Adept at implementing robust solutions with a focus on clean code and efficient performance. Skilled in unit testing using JUnit and React Testing. Committed to delivering high-quality software solutions and staying abreast of industry best practices.</p>
       <Experience/>
       <Projects/>
       <div className={styles.iconsContainer}>
        {techStackIcons.map((icon, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <img src={icon} alt={`icon-${index}`} width="65" style={{ width: '65px', height: '65px', marginRight: '10px', marginBottom: index === techStackIcons.length - 1 ? '0px' : '48px' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
