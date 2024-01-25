import { useState } from "react";

import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
