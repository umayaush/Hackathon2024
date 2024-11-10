'use client'
import React, {useState} from "react";

function Searchbar({onSearch}){
    const [query, setQuery] = useState('');

    const handleInput = (event) =>{
        setQuery(event.target.value);
    };

    const searchSubmission = (event) => {
        event.preventDefault();
        if (onSearch){
            onSearch(query);//passes search query to parent component
        }
    };

    return (
        <form onSubmit={searchSubmission} style={{ display: 'flex', alignItems: 'center', width: '250px' }}>
          <input
            type="text"
            placeholder="Search for terms..."
            value={query}
            onChange={handleInput}
            style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: 'black', }}
          />
          <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span role="img" aria-label="search" style={{ fontSize: '24px' }}>🔍</span>
          </button>
        </form>
      );
    }
    export default Searchbar;