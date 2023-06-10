import React from 'react';
import styles from './footer.module.scss';


const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.brand}>
      <div className={styles.created}>
        Created by Miao
      </div>
      <div className={styles.copyright}>
        Copyright © Miao
      </div>
    </div>
  </footer>
)

export default Footer;
