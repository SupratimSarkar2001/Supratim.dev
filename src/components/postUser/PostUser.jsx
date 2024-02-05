import React from 'react'
import styles from "./postUser.module.css";
import Image from "next/image";


const PostUser = () => {
  return (
   <div className={styles.container}>
   <Image
     className={styles.avatar}
     src={"/noavatar.webp"}
     alt=""
     width={50}
     height={50}
   />
   <div className={styles.texts}>
     <span className={styles.title}>Author</span>
     <span className={styles.username}>Supratim Sarkar</span>
   </div>
 </div>
  )
}

export default PostUser
