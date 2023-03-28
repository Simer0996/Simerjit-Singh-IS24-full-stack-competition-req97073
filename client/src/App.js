import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import EditPage from './pages/EditPage'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={< EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
