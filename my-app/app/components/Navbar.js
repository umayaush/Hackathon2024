import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/dashboard">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/saved">Saved</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/accountsettings">Account Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;