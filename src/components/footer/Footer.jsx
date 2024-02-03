import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>supratimsarkar2001@gmail.com</div>
      <div className={styles.text}>
        Supratim.dev © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
