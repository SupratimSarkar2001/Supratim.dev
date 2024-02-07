"use client"
import React, { useState } from 'react'
import NavLink from './navLink/NavLink';
import styles from "./links.module.css";
import Image from 'next/image';
import { handleLogout } from '@/lib/action';

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.path} />
        ))}
        {
          session?.user ? (
            <>
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>  
          )
            :
            (<NavLink item={{ title: "Login", path: "/login" }} />)
        }
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {
            session?.user ? (
              <>
                <form action={handleLogout}>
                  <button className={styles.logout}>Logout</button>
                </form>
              </>
            )
              :
              (<NavLink item={{ title: "Login", path: "/login" }} />)
          }
        </div>
      )}
    </div>
  )
}

export default Links
