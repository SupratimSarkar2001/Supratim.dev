"use client"
import React, { useEffect } from 'react'
import styles from './loginForm.module.css'
import { login } from '@/lib/action'
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from 'next/navigation';



const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm
