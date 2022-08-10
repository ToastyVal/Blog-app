import React from "react";
import Footer from "../components/footer";
import Login from "../components/login";
import NavBar from "../components/navBar";

function LoginPage() {
    return (
        <div>
            <NavBar />
            <Login />
            <Footer /> 
        </div>
    )
}

export default LoginPage