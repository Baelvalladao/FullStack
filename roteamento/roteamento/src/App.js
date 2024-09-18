import React from 'react';
import './App.css';
import Pagina1 from './pagina1';
import Pagina2 from './Pagina2';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';


function App() {
  return (
    <BrowserRouter>
      |<Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Pagina1 />}></Route>
          <Route path="pagina1" element={<Pagina1/>}></Route>
          <Route path="pagina2" element={<Pagina2/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
