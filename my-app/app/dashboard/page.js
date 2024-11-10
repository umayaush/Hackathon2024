'use client'
import Navbar from '../components/Navbar';

import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';

export default function Page() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        try {
          
          //const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`); whatever we will use to search and get response i suppose
          //const data = await response.json(); 
          setResults(data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
    return (
        <div>
            <Navbar />
            <main>
                {/* Title */}
                <h1>This is the dashboard</h1>
                <Searchbar onSearch={handleSearch} />
            </main>
        </div>
    );
}