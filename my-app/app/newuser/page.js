"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Link from "next/link";

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        setMessage(data.message);
        if (data.signupAuthenticated) {
            router.push('/login');
        }
    };

    return (
        <div className={styles['registration-container']}>
            <h1 className={styles['registration-title']}>New-O-Lingo</h1>
            <p className={styles['registration-subtitle']}>New User Registration</p>
            
            <div className={styles['registration-form']}>
                <label htmlFor="username">Name</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="John Smith" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="john.smith@something.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="******" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                
                <button 
                    className={styles['registration-button']} 
                    onClick={handleSignup}
                >
                    Register
                </button>
            </div>
            {message && <p className={styles['registration-message']}>{message}</p>}
        </div>
    );
}

export default Registration;
