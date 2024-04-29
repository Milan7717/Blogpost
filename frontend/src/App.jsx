import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Editblog from "./pages/Editblog";
import Deleteblog from "./pages/Deleteblog";
import Addblog from "./pages/Addblog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/addblog" element={<Addblog />} />
        <Route path="/editblog/:id" element={<Editblog />} />
        <Route path="/deleteblog/:id" element={<Deleteblog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
