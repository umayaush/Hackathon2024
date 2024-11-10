import React from "react";
import styles from './page.module.css';
import Link from "next/link";

function Registration (){
    return(
        <div className={styles['registration-container']}>
        <h1 className={styles['registration-title']}>New-O-Lingo</h1>
        <p className={styles['registration-subtitle']}>New User Registration</p>
        
        <div className={styles['registration-form']}>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" placeholder="John Smith" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="john.smith@something.com" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="******" />
          
          <Link href="./login">
        <button className={styles['registration-button']}>Register</button>

      </Link>
        </div>
      </div>

    );
}
export default Registration;