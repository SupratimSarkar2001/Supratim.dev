import React from 'react'
import styles from "./login.module.css";
import { handleGithubLogin } from '@/lib/action';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
