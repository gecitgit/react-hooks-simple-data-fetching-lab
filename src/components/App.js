// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [picLoaded, setPicLoaded] = useState(null)   

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(r => r.json())
          .then(data => setPicLoaded(data.message))
      }, []);

    if (!picLoaded) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <img src={picLoaded} alt={"A Random Dog"}></img>
            <h2>this is the title of App</h2>
            <p>here are some more words for App</p> 
        </div>
    )
}


export default App;