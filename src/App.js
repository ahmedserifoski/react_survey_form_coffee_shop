import React from 'react';
import './App.css';

import Title from "./components/Title"
import Form from "./components/Form"


function App() {
  return (
    <div className="App">
      <div className="frame">
        <div className="main">
          <Title/>
          <Form />
          
        </div>

      </div>
    </div>
  );
}

export default App;
