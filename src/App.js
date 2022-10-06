import "./App.css";
import React, { useState, useEffect } from "react";
import DATA from "./data/db.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import NavSections from "./Pages/NavSections";
import NewsDetails from "./Pages/NewsDetails";
import Home from "./Pages/Home";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(DATA);
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home news={news} />} />
          <Route path="/:category" element={<NavSections news={news} />} />
          <Route
            path="/:category/:title"
            element={<NewsDetails news={news} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
