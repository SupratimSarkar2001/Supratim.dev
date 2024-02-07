"use client"
import React from 'react'
import style from './registerForm.module.css'
import { register } from '@/lib/action'

const registerForm = () => {
  return (
    <form className={style.form} action={register}>
       <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
    </form>
  )
}

export default registerForm
