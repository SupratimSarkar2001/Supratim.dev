import React from 'react'
import styles from "./write.module.css"
import { auth } from '@/lib/auth';
import WriteForm from '@/components/writeForm/WriteForm';

const WritePage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <h1>Write Your Own Tech Blog</h1>
      <div className={styles.wrapper}>
          <WriteForm userId={session.user.id}/>
      </div>
    </div>
  )
}

export default WritePage
