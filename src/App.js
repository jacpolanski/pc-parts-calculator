import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Main from "./Main";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
