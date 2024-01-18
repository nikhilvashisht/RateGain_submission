import "./App.css";
import React, { useState } from "react";
import Dashboard from "./dashboard";
import LoginPage from "./loginpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
