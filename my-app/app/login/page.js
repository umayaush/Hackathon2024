"use client";

import { useState } from 'react'; 
import { useRouter } from 'next/navigation';

import React from 'react';
import styles from './page.module.css'; // Import the CSS module
import Link from "next/link";

function Login() {
  // setting initial values of email, password, and message to an empty string
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [message, setMessage] = useState(''); 
  const router = useRouter();

  const handleLogin = async (e) => { 
    e.preventDefault(); 
    const response = await fetch('http://localhost:5000/login', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({ email, password }), 
    }); 
    const data = await response.json(); 
    if (data.authenticated) { 
      setMessage(data.message); 
      router.push('/dashboard'); 
    } else { 
      setMessage(data.message); 
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
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
        <button 
          className={styles['login-button']} 
          onClick={handleLogin}
        >
          Sign In
        </button>
       
        <div className={styles['login-links']}>
          <Link href="./forgotpassinput">
            <button className={styles['forgot-pass-button']}>Forgot Password?</button>
          </Link>
          <Link href="./newuser">
            <button className={styles['new-user-button']}>New User? Register Here</button>
          </Link>
        </div>
      </div>
      {message && <p className={styles['login-message']}>{message}</p>}
    </div>
  );
}

export default Login;
