import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Navbar } from "./components/Navbar";

import { CartContext } from "./Pages/creatCartContext";
import { Cart } from "./Pages/Cart";
import { FetchedAsync } from "./Pages/FetchedAsync";
import { BuyNow } from "./Pages/BuyNow";
import { ShoppingCart } from "./components/ShoppingCart";


const About = React.lazy(() => import ('./components/About'))

export default function App() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(localStorage.getItem("Name") || "");

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("Name", name);
    setSavedName(name);
  }

  return (
    <CartContext>
    

      <div className="App">
        
        <BrowserRouter>
       <Suspense fallback={<p> loading...</p>}>
          <Routes>
            <Route path="/Product" element={<><Navbar /><FetchedAsync /></>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/BuyNow" element={<><BuyNow /></>} /> 
            <Route path="/ShoppingCart" element={<><ShoppingCart /></>} /> 
           
        

          </Routes>
          </Suspense>
        </BrowserRouter>
       
      </div>
    </CartContext>
  );
}
