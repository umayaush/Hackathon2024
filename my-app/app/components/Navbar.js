'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();  

  const isActive = (path) => pathname === path;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/dashboard" className={isActive("/dashboard") ? styles.active : ""}>
            Dashboard
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/saved" className={isActive("/saved") ? styles.active : ""}>
            Saved
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/accountsettings" className={isActive("/accountsettings") ? styles.active : ""}>
            Account Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;