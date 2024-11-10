import React from 'react';
import styles from './page.module.css'; // Import the CSS module

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
        
        <button className={styles['login-button']}>Sign In</button>
        
        <div className={styles['login-links']}>
          <a href="#forgot-password">Forgot password?</a>
          <a href="#register">New User? Register Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
