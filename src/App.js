import './App.css';
import React, { useState,  useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect( () => {
    const results = fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(res => JSON.stringify(res))
    .then(res => setData(res));
    console.log(results);
    
    
  }, []);

 
  return (
    <>
    <p>Products List</p>
    <ul>
      {data.map((item, idx) => (
        <li key={idx}>
          {item}
        </li>
      ))}
    </ul>
    </>
  );
}

export default App;
