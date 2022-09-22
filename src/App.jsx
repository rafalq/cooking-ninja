// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Create from "@/pages/create/Create";
import Home from "@/pages/home/Home";
import Recipe from "@/pages/recipe/Recipe";
import Search from "@/pages/search/Search";
import Navbar from "@/components/navbar/Navbar";
import ThemeSelector from "@/components/theme/ThemeSelector";
import {useTheme} from "@/hooks/useTheme"

// styles
import "./App.css";

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <div className="main">
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
