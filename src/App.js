import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import cartItems from './components/cartArray';
import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import items from './components/Data';

const ArrayLengthContext = createContext();
function App()
{
  const len = cartItems.length
  const [arrayLength, setArrayLength] = useState(len)
  const[buttonText, setButtonText] = useState("")
  const [ bodyItems, setBodyItems] = useState(items)
  
  return (
    <ArrayLengthContext.Provider value={{ arrayLength, setArrayLength, buttonText, setButtonText, bodyItems, setBodyItems }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header items={arrayLength} />
              <Body />
            </>
          } />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </ArrayLengthContext.Provider>
  );
}

export default App;
export { ArrayLengthContext };
