import React, { useState } from 'react';
import './App.css';
import { data } from "./mock/data";
import { DragComponent } from "./dragComponent";

function App() {
  const [originData, setData] = useState(data);
  // const letMeKnow = () => alert('good!!!');
  const letMeKnow = () => console.log('good!!!');

  return (
    <div className="App">
      <DragComponent data={originData} sortData={setData} doSth={letMeKnow} />
    </div>
  );
}

export default App;
