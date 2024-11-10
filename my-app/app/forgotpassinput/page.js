import React from 'react';
import styles from './page.module.css'; // Import the CSS module
import Link from "next/link";


function forgotPass(){
    return (

    <div className={styles['forgot-pass-container']}>
      <h1 className={styles['forgot-pass-title']}>New-O-Lingo</h1>
      <p className={styles['forgot-pass-subtitle']}>Forgot Password?</p>
    
    <div className={styles['forgot-pass-form']}>
    <label htmlFor="email">Please enter your email below to recover your password:</label>
    <input type='email' id='email' placeholder='john.smith@something.com'/>
    </div>
    
    <div>
    <Link href='./forgotpassoutput'>
        <button className={styles['forgot-input-button']}>Recover Your Password</button>
    </Link>
    </div>
    </div>
    );
}
export default forgotPass;