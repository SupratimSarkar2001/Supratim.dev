import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: "Contact",
  description: "Contact Supratim.dev",
} 

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Get In Touch</h1>
        <div className={styles.connectLinks}>
          <Link 
          className={styles.link}
          href={"https://github.com/SupratimSarkar2001"} target='_blank'>
            <Image src="/github.svg" alt="githbub" className={styles.img_logo} width={40} height={40} />
          </Link>
          <Link
          className={styles.link}
           href={"https://www.linkedin.com/in/supratimsarkar08/"} target='_blank'>
            <Image src="/linkedin.svg" alt="linkedin" className={styles.img_logo} width={40} height={40} />
          </Link>
          <Link 
          className={styles.link}
          href={"https://twitter.com/8ssarkar"} target='_blank'>
            <Image src="/x.svg" alt="x" className={styles.img_logo} width={40} height={40} />
          </Link>
        </div>
        <h3 className={styles.subtitle}>Email Me on: <span className={styles.email}>supratimsarkar2001@gmail.com</span></h3>
      </div>
    </div>
  )
}

export default ContactPage
