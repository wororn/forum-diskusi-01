import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Section/Home";
import Billboard from "./Section/Billboard.js";
import NewPage from "./Section/NewPage";
import Detail from "./Section/Detail";

function App() {
  return (
    <div className="forum-app">
      <header className="forum-app__header">
        <h1>Aplikasi Forum Diskusi</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboards" element={<Billboard />} />
          <Route path="/create" element={<NewPage />} />
          <Route path="/threads/:id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
