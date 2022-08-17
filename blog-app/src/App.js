import Blog from "./routes/Blog";
import About from "./routes/AboutUs";
import Content from "./routes/ContentPolicy";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import LoginPage from "./routes/Login";
import Registration from "./routes/Registration";
import AdminLogin from "./routes/AdminLogin";
import { AuthProvider } from "./authContext";
import { React, useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <>
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contenPolicy" elemment={<Content />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
