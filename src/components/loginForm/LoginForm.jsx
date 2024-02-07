"use client"
import React from 'react'
import styles from './loginForm.module.css'
import { login } from '@/lib/action'


const LoginForm = () => {
  return (
    <form className={styles.form} action={login}>
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    </form>
  )
}

export default LoginForm
