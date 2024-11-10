'use client';

import React from 'react';
import PhraseCard from './PhraseCard';

const PhraseGrid = ({ phrases }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',                  // 4 columns -- can change as needed
        gap: '25px',
        paddingLeft: '25px'
      }}
    >
      {phrases.map((phraseObj, index) => (          // create the array
        <PhraseCard
          key={index}
          phrase={phraseObj.phrase}
          meaning={phraseObj.meaning}
        />
      ))}
      
    </div>
  );
};

export default PhraseGrid;
