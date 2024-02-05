import Image from "next/image";
import styles from "./singlePost.module.css";import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";
 'react'

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/post_demo.jpg"} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
              <PostUser/>
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>12.03.23</span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, incidunt. Veniam facilis quia unde dolorum! Est natus a consequuntur et voluptatibus iure error aspernatur adipisci fugiat, animi quaerat debitis consequatur?</div>
      </div>
    </div>
  )
}

export default SingleBlogPage
