import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Pages/Main/MainPage.js";
import ArchiveSite from "./components/Pages/Archive/ArchiveSite.js";
import RandomSite from "./components/Pages/Random/RandomSite.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route />
        <Route path="/archive" element={<ArchiveSite />} />
        <Route />
        <Route path="/random" element={<RandomSite />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
