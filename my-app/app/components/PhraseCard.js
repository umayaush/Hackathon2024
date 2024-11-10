'use client';

import React, { useState, useEffect } from 'react';

const PhraseCard = ({ phrase, meaning, context, example, openModal }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    setIsFavourite((prevState) => !prevState);
  };

  return (
    <div
      onClick={() => openModal({ phrase, meaning, context, example })}
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
