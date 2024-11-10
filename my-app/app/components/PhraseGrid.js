'use client';

import React from 'react';
import PhraseCard from './PhraseCard';

const PhraseGrid = ({ phrases, openModal }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',                  
        gap: '25px',
        paddingLeft: '25px'
      }}
    >
      {phrases.map((phraseObj, index) => (
        <PhraseCard
          key={index}
          phrase={phraseObj.phrase}
          meaning={phraseObj.meaning}
          context={phraseObj.context}  
          category={phraseObj.category} 
          openModal={openModal}                   // passing openModal here
        />
      ))}
    </div>
  );
};

export default PhraseGrid;
