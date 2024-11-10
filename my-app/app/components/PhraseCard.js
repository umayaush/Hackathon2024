// PhraseCard.js
import React from 'react';


const PhraseCard = ({ phrase, meaning, favourite }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      margin: '10px',
      maxWidth: '300px'
    }}>
      <h3 style={{ fontSize: '1.2em', margin: '0' }}>{phrase}</h3>
      <p style={{ fontSize: '1em', color: '#555' }}>{meaning}</p>
      <button
        onClick={favourite}
        style={{
          backgroundColor: '#D8E2DC',
          color: 'black',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Favourite
      </button>
    </div>
  );
};

export default PhraseCard;

