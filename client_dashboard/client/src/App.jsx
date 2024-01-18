// src/App.js

import React from "react";
import FormCreator from "./FormCreator";
import LoginForm from "./Login";
import DashboardPage from "./Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
