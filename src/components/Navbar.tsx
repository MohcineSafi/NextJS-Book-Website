// src/components/NavBar.tsx
"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/contact">
        Contact
      </Link>
      <Link className={styles.link} href="/aboutus">
        About Us
      </Link>
      <Link className={styles.link} href="/settings">
        Settings
      </Link>
      <Link className={styles.link} href="/rateus">
        Rate Us
      </Link>
    </nav>
  );
}
