import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
   <div className={styles.container}>
   <div className={styles.top}>
     <div className={styles.imgContainer}>
       <Image src={"/post_demo.jpg"} alt="" fill className={styles.img}/>
     </div>
     <span className={styles.date}>1.02.24</span>
   </div>
   <div className={styles.bottom}>
     <h1 className={styles.title}>Blog Title</h1>
     <p className={styles.desc}>dlog desc</p>
     <Link className={styles.link} href={`/blog/post`}>READ MORE</Link>
   </div>
 </div>
  )
}

export default PostCard
