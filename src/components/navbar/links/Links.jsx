"use client"
import React, { useState } from 'react'
import NavLink from './navLink/NavLink';
import styles from "./links.module.css";

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

const isAdmin = true;
const session = true;

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.path} />
        ))}
        {
          session ? (
            <>
              {
                isAdmin &&
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              }
              <button className={styles.logout}>Logout</button>
            </>
          )
            :
            (<NavLink item={{ title: "Login", path: "/login" }} />)
        }
      </div>
      <div className={styles.menuButton} onClick={() => setOpen(!open)}>Menu</div>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {
            session ? (
              <>
                {
                  isAdmin &&
                  <NavLink item={{ title: "Admin", path: "/admin" }} />
                }
                <button className={styles.logout}>Logout</button>
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
