import React from 'react';
import styles from './page.module.css'; // Import the CSS module
import Link from "next/link";

function Login() {
  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>New-O-Lingo</h1>
      <p className={styles['login-subtitle']}>Log In Below</p>
      
      <div className={styles['login-form']}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="john.smith@something.ca" />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="******" />
        
        
        <Link href="./dashboard">
        <button className={styles['login-button']}>Sign In</button>

      </Link>
       
        <div className={styles['login-links']}>
        <Link href="./forgotpassinput">
  <button className={styles['forgot-pass-button']}>Forgot Password?</button>
</Link>
          <Link href="./newuser">
  <button className={styles['new-user-button']}>New User? Register Here</button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;