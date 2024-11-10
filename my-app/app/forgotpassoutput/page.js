import React from 'react';
import styles from './page.module.css'; // Import the CSS module
import Link from "next/link";

function forgotPassOut(){
    return(
    
    <div className={styles['forgot-out-container']}>
      <h1 className={styles['forgot-out-title']}>New-O-Lingo</h1>
      <p className={styles['forgot-out-subtitle']}>Forgot Password?</p>
    
    <div className={styles['forgot-out']}>
        <h2>Your Password is: </h2>
    </div>
    
    <div>
    <Link href='./login'>
        <button className={styles['forgot-out-button']}>Log In</button>
    </Link>
    </div>
    </div>
    
    );
}
export default forgotPassOut;
