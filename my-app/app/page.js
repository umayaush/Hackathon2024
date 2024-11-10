"use client"
import React, {useEffect, useState} from 'react';


import Link from "next/link";
import Login from './login/page'
export default function Page() {

  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);

        // the query result is displayed as stringified.
        setMessage(JSON.stringify(data.data));
      }
    );
  }, []);

  return (
    <main>
      <Login/>

    </main>
  );
}