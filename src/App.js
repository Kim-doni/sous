import React from "react";
import HomeMain from "./HomeMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
