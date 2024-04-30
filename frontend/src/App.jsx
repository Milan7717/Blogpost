import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Editblog from "./pages/Editblog";
import Deleteblog from "./pages/Deleteblog";
import Addblog from "./pages/Addblog";
import SingleBlog from "./components/SingleBlog";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addblog" element={<Addblog />} />
        <Route path="/editblog/:id" element={<Editblog />} />
        <Route path="/deleteblog/:id" element={<Deleteblog />} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
