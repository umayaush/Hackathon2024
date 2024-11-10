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
            onSearch(query);        // passes search query to parent component
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '25px', paddingBottom: '15px', paddingTop: '15px' }}>
            
            <form onSubmit={searchSubmission} style={{ display: 'flex', justifyContent: 'flex-end', width: '1475px', paddingLeft: '25px' }}>
            <input
                type="text"
                placeholder="Search for terms..."
                value={query}
                onChange={handleInput}
                style={{ flex: 1, padding: '5px', borderRadius: '4px', border: '1px solid #ccc', color: 'black', backgroundColor: '#FAF9F6' }}
            />
            <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {/* <span role="img" aria-label="search" style={{ fontSize: '24px' }}>🔍</span> */}
                <img
                    src="/icons/search.png" 
                    alt="Search"
                    style={{ width: '20px', height: '20px', marginRight: '25px', marginLeft: '5px' }}
                />
            </button>
            </form>
        </div>
      );
    }
    
export default Searchbar;