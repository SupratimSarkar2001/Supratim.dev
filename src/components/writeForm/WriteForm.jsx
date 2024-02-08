"use client"
import React, { useState } from 'react';
import styles from './writeForm.module.css';
import { useRouter } from 'next/navigation';
import SubmitButton from '../submitButton/SubmitButton';
const WriteForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
    slug: '',
  });

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const dataToSubmit = { ...formData, userId };
    try {
     const response = await fetch('/api/blog', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(dataToSubmit),
     });
      
     router.push("/blog")
   } catch (error) {
     console.error('Error submitting blog:', error);
   }
   
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="desc"
          type="text"
          placeholder="Write your blog here"
          rows={15}
          value={formData.desc}
          onChange={handleChange}
        />
        <input
          name="img"
          type="text"
          placeholder="Image URL"
          value={formData.img}
          onChange={handleChange}
        />
        <input
          name="slug"
          type="text"
          placeholder="slug"
          value={formData.slug}
          onChange={handleChange}
        />
        <SubmitButton buttonText={"Submit"}/>
      </form>
    </div>
  );
};

export default WriteForm;

