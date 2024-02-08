import React from 'react'
import {useFormStatus} from "react-dom"
import styles from './submitButton.module.css'

const SubmitButton = ({ buttonText }) => {
 const { pending } = useFormStatus()
 return (
  <button type="submit" className={styles.button} aria-disabled={pending}>
   {buttonText}
  </button>
 )
}

export default SubmitButton
