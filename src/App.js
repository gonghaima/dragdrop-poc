import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from "./mock/data";

function App() {
  return (
    <div className="App">
      <div className="item-container">
        {data.map((d, idx) => <div className="items" key={`item${idx}`}>{d.description}</div>)}
      </div>
    </div>
  );
}

export default App;
