import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { DiMongodb } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navLogo}>
            <DiMongodb className={styles.navIcon} />
          </Link>
          miami
          <div onClick={handleClick} className={styles.menuIcon}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLinks}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLinks}>
                Our Impact
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLinks}>
                Donate
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLinks}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
