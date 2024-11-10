'use client';

import React, { useState } from 'react';

const PhraseCard = ({ phrase, meaning }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    setIsFavourite((prevState) => !prevState);
  };

  const handleCardClick = () => {
    alert(`Card for "${phrase}" clicked!`);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        borderColor: '#000000',
        margin: '10px',
        maxWidth: '300px',
        backgroundColor: '#FCD5CE',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <h3 style={{ fontSize: '1.2em', margin: '0' }}>{phrase}</h3>
      <p style={{ fontSize: '1em', color: '#555' }}>{meaning}</p>

      <button
        onClick={toggleFavourite}
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >

        <img
          src={isFavourite ? '/icons/filled_bookmark.png' : '/icons/bookmark.png'}
          alt="Favourite"
          style={{
            width: '20px',
            height: '20px',
            marginRight: '5px',
          }}
        />

      </button>
    </div>
  );
};

export default PhraseCard;