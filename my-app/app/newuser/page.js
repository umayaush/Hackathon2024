"use client"
import React, {useEffect, useState} from 'react';
import styles from './page.module.css';
import Link from "next/link";

function Registration (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/newuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Registration successful!"); // Show success message
        window.location.href = "./login"; // Redirect to login
      } else {
        setMessage(data.message); // Display error message from backend
      }
    } catch (error) {
      setMessage("Error registering user"); // Handle fetch error
      alert(message);
    }
  };

  return (
    <div className={styles['registration-container']}>
      <h1 className={styles['registration-title']}>New-O-Lingo</h1>
      <p className={styles['registration-subtitle']}>New User Registration</p>
      
      <div className={styles['registration-form']}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="John Smith" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="john.smith@something.com" 
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
        
        <button className={styles['registration-button']} onClick={handleRegister}>
          Register
        </button>
        
      </div>
    </div>
  );
}

export default Registration;