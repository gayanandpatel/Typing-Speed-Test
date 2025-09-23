import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        <Link to="/" className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon} role="img" aria-label="keyboard">⌨️</span>
            <span>JumpingFingers</span>
          </div>
        </Link>
        <ul className={styles.navLinks}>
          
          <li><Link to="/about" className={styles.link}>About</Link></li>
          <li><Link to="/contact" className={styles.link}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;