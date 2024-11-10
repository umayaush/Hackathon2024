// import React from 'react';

// const Filter = ({ filters, onFilterChange, activeFilter }) => {
//     return (
//         <div style={{paddingLeft:'25px'}}>
//             {filters.map((filter) => (
//                 <button
//                     key={filter.value}
//                     onClick={() => onFilterChange(filter.value)}
//                     style={{
//                         backgroundColor: activeFilter === filter.value ? '#ccc' : '#fff',
//                         padding: '1px',
//                         margin: '5px',
//                         borderRadius: '5px',
//                         border: '0.5px solid #ccc',
//                         cursor: 'pointer',
//                         width: '180px',
//                         height: '190px'
//                     }}
//                 >
//                     <strong>{filter.name}</strong>
//                     <p>{filter.description}</p>
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Filter;


import React, { useState } from 'react';
import styles from './filter.module.css';  // Import the CSS module

const Filter = ({ filters, onFilterChange, activeFilter }) => {
    return (
        <div className={styles.filterContainer}>
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`${styles.filterButton} ${activeFilter === filter.value ? styles.filterButtonActive : ''}`}
                >
                    <strong>{filter.name}</strong>
                    <p>{filter.description}</p>
                </button>
            ))}
        </div>
    );
};

export default Filter;


