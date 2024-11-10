"use client"
import React, {useEffect, useState} from 'react';


import Link from "next/link";
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
      {/* Title */}
      <h1>
        Welcome to App Name
      </h1>

      {/* Button (has some Tailwind CSS) */}
      <Link href="./dashboard">
        <button className=" bg-rose-400"> 
          Login
        </button>
      </Link>
      {message}

    </main>
  );
}