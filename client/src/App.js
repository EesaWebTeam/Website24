import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
function App() {
  const { isCheckingAuth, CheckAuth } = useAuthStore();

  useEffect(() => {
    CheckAuth();
  }, [CheckAuth]);

  if (isCheckingAuth) {
    return <div className="flex justify-center items-center min-h-screen">Checking authentication...</div>; //add loading animation
  }

  return (
    <Router>
    <div className="app">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  </Router>
  );
}

export default App;
