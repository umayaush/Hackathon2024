// import Navbar from '../components/Navbar';
// // import PhraseCard from '../components/PhraseCard';
// import PhraseGrid from '../components/PhraseGrid';
// import Searchbar from '../components/Searchbar';

// export default function Page() {
//     const phrases = [
//         { phrase: 'Example 1', meaning: 'Meaning of example 1' },
//         { phrase: 'Example 2', meaning: 'Meaning of example 2' },
//         { phrase: 'Example 3', meaning: 'Meaning of example 3' },
//         { phrase: 'Example 4', meaning: 'Meaning of example 4' },
//         { phrase: 'Example 5', meaning: 'Meaning of example 5' },
//                 // sql will probably handle this, but these are just placeholders
//       ];

//     return (
//         <div>
//             <Navbar />
//             <main>
//                 <h1>SAVED</h1>
//                 <Searchbar />
//                 <div>
//                     <PhraseGrid phrases={phrases} />
//                 </div>
//             </main>
//         </div>
//     );
// }

'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import PhraseGrid from '../components/PhraseGrid';

const SavedPage = () => {
  const [savedPhrases, setSavedPhrases] = useState([
    { phrase: 'Example 1', meaning: 'Meaning of example 1', category: 'academic' },
    { phrase: 'Example 2', meaning: 'Meaning of example 2', category: 'social' },
    { phrase: 'Example 3', meaning: 'Meaning of example 3', category: 'food' },
    { phrase: 'Example 4', meaning: 'Meaning of example 4', category: 'technology' },
             // sql will probably handle this, but these are just placeholders
  ]);

  const removeFromSaved = (phraseToRemove) => {
    setSavedPhrases((prevSavedPhrases) =>
      prevSavedPhrases.filter((phrase) => phrase.phrase !== phraseToRemove.phrase)
    );
  };

  return (
    <div>
      <Navbar />      
      <main>        
        <h1>YOUR SAVED PHRASES</h1>
        <Searchbar />
        {savedPhrases.length === 0 ? (
          <p>No saved phrases yet. Start saving some!</p>
        ) : (
          <PhraseGrid
            phrases={savedPhrases}
            removeFromSaved={removeFromSaved} 
          />
        )}
      </main>
    </div>
  );
};

export default SavedPage;
