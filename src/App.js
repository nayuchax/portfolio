import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Works from "./components/Works"
import Header from "./components/Header";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/works" element={<Works/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
