import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
  
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Jumping Fingers. All rights reserved.</p>
        <div className={styles.links}>
          <a href="https://github.com/gayanandpatel" target="_blank" rel="noopener noreferrer">Gayanand Patel</a>
          <span>|</span>
          <a href="https://github.com/gayanandpatel/Typing-Speed-Test" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;