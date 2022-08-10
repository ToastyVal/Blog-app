import React from "react";
import Blog from "./routes/Blog";
import About from "./routes/AboutUs";
import Content from "./routes/ContentPolicy";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contentPolicy" elemment={<Content />} />
      </Routes>
    </>
  );
}

export default App;
