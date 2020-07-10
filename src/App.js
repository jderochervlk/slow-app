// https://slow-app.web.app/

import './App.css';

import React, { useState } from 'react';

import ButtonToClick from './ButtonToClick';
import Child from './Child';
import Data from './Data';
import { addToBigNumber } from './slowFunctions';
import SlowRender from './SlowRender';

function App() {
  const [number, setNumber] = useState(100)
  const [total, setTotal] = useState(0)

  const handleClick = setTotal

  const addB = addToBigNumber
  
  addB(number)
    .then(setNumber)

  let y

  const x = addB(500).then(z => {y = z})
  
  return (
    <div className="App">
      <header className="App-header">
          <SlowRender/>
          <Child value={number}>
            <ButtonToClick handleButtonClick={handleClick}/>
            <Child value={JSON.stringify(x)}></Child>
            <Child value={y}></Child>
            <Child value={total}>
              <Data/>
            </Child>
            <Child value={number}>
                <Child value="Hello"/>
            </Child>
          </Child>
      </header>
    </div>
  );
}

export default App;
