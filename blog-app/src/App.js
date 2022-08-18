import React from "react";
import Blog from "./routes/Blog";
import About from "./routes/AboutUs";
import Content from "./routes/ContentPolicy";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import LoginPage from "./routes/Login";
import Registration from "./routes/Registration";
import ChatApp from "./components/chatApp/chatApp";
import AdminLogin from "./routes/AdminLogin";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contenPolicy" elemment={<Content />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/chatApp" element={<ChatApp />} />
      </Routes>
    </>
  );
}
export default App;