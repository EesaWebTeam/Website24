import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import BlogsPage from "./components/BlogsPage";
import BlogDetails from "./components/BlogDetails";
function App() {
  return (
  <Router>
    <div className="app">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/" element={<BlogsPage />}/>
        <Route path = "/blog/:id" element={<BlogDetails/>}/>

      </Routes>
      
    </div>
  </Router>
  );
}

export default App;
