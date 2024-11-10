"use client"
import React, {useEffect, useState} from 'react';
import styles from './page.module.css'; // Import the CSS module
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        // If login is successful, redirect to the dashboard
        window.location.href = "./dashboard";
      } else {
        setMessage(data.message); // Show error message if login fails
      }
    } catch (error) {
      setMessage("Error logging in"); // Show error if request fails
      alert(message);
    }
  };


  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>New-O-Lingo</h1>
      <p className={styles['login-subtitle']}>Log In Below</p>

      <div className={styles['login-form']}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="john.smith@something.ca"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles['login-button']} onClick={handleLogin}>Sign In</button>
        

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