import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Temlate from './Temlate';
function App() {

// here commented code for fetching data from server

// const [database, setDatabase] = useState([])
// useEffect(()=>{
// fetch('http://localhost:3001/products')
// .then(response=> response.json())
// .then(data=> setDatabase(data))
// .catch(e=> console.log(e))
// 
// console.log(dataBase);
// },[])


// here getting data from local json
let database = require('./db.json')
  return (
    <div className="App">
      { database.products.map((item, index) => <Temlate {...item} key={`${item.code} + ${index}`}/> )}
    </div>
  );
}

export default App;
