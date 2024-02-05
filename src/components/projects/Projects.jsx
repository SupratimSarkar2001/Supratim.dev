import React from 'react'
import styles from './projects.module.css'

const Projects = () => {
 const projects = [
  {
   id: 1,
   name: 'Freelance Website',
   description: 'This is a fullstack freelance website.',
   url: 'https://github.com/SupratimSarkar2001/freelancer-website',
   technologies: ['React.js', 'Springboot', 'MySQL'],
  },
  {
   id: 2,
   name: 'Employee Reimbusment System',
   description: 'This is a fullstack Employee Reimbusment System.',
   url: 'https://github.com/SupratimSarkar2001/Employee-Reimbusment-System',
   technologies: ['React.js', 'Spring Boot', 'MySQL'],
  },
  {
   id: 3,
   name: 'Booking Website',
   description: 'This is a fullstack Hotel Booking website.',
   url: 'https://github.com/SupratimSarkar2001/BookingBackend',
   technologies: ['React.js', 'Node.js Boot','MongoDB'],
  },
  {
   id: 4,
   name: 'Ecommerce Website',
   description: 'This is an Ecommerce Website.',
   url: 'https://github.com/SupratimSarkar2001/amazonClone',
   technologies: ['React.js', 'BootStrap'],
  }
 ];
 return (
  <div className={styles.container}>
   <h1>Projects</h1>
   <div className={styles.projects}>
    {projects.map((project) => (
     <div key={project.id} className={styles.projectCard}>
      <h3 className={styles.projectName}>
      </h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectTechnologies}>
       <strong>Technologies:</strong> {project.technologies.join(', ')}
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Projects
