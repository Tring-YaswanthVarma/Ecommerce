import Header from './components/Header';
import Body from './components/Body'
import cartItems from './components/cartArray';
import React, { useState, createContext,useMemo } from 'react';
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
  
   const value = useMemo(() => ({
    arrayLength, setArrayLength, buttonText, setButtonText, bodyItems, setBodyItems
  }), [arrayLength,buttonText,bodyItems])
  
  return (
    <ArrayLengthContext.Provider value={value}>
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
