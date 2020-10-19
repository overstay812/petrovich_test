import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Temlate from './Temlate';
function App() {

useEffect(()=>{
fetch("src/products.json")
.then(response=> response.json())
.then(data=>console.log(data))
.catch(e=> console.log(e))
},[])

  return (
    <div className="App">
     <Temlate/>
    </div>
  );
}

export default App;
