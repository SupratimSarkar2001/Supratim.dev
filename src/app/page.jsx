import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Exploring Tomorrow&apos;s Tech Today</h1>
        <p className={styles.desc}>
        Embark on a journey through the cutting edge. Explore tomorrow&apos;s tech today with insights, trends, and innovations in our tech blog.
        </p>
        <div>
        <Link href={"/contact"} className={styles.button}>Contact</Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/dev.gif" alt="Our Dev" fill className={styles.heroImg}/>
      </div>
    </div>
  )
};

export default Home;