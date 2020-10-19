import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Temlate from './Temlate';
function App() {

const [database, setDatabase] = useState([])
useEffect(()=>{

fetch('http://localhost:3001/products')
.then(response=> response.json())
.then(data=> setDatabase(data))
.catch(e=> console.log(e))
},[])

  return (
    <div className="App">
      { database.map((item, index) => <Temlate {...item} key={`${item.code} + ${index}`}/> )}
    </div>
  );
}

export default App;
