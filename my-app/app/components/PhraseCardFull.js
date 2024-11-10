import React from "react";

const WordCard = () => {
    //data (MY SQL PEEPS)
    const WordData= {
        word: "Word 1",
        category: "xyz",
        definition: "abc",
        commonuses: ["abc", "xyz"]
    };
    <link href="/your-path-to-uicons/css/uicons-phasecardfull.css" rel="stylesheet"></link>
    return (
        <div className="word-page">
            {/*Save Icon*/}
            <div><button
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
      </button></div>
        
            
        {/*Word Info*/}
        <h1>{wordData.word}</h1>
       <p className="category">Category: {WordData.category}</p>
       <p className="definition">Definition: {WordData.definition}</p>

       {/*Photo*/}
       <div className="photo">
        {/*<img src={yourImage} alt="description"*/}
       </div>
       
       {/*Common Uses*/}
       <div className="common-uses">
        {wordData.commonuses.map((use,index) => (
            <p key={index}>Common Use: {use}</p>
        ))}
       </div>
       {/*Back Icon*/}
       <Link href="/dashboard">
       <div>
       <button className={styles["back"]}>Go Back</button>
       </div>
       </Link>
        </div>

        
    );

}

//<a href="https://www.flaticon.com/free-icons/save" title="save icons">Save icons created by Freepik - Flaticon</a>
