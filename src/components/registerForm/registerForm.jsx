"use client"
import React from 'react'
import style from './registerForm.module.css'
import { register } from '@/lib/action'
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const registerForm = () => {
  const [state, formAction] = useFormState(register, undefined)
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={style.form} action={formAction}>
       <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  )
}

export default registerForm
