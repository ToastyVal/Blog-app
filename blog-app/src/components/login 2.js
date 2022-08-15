import React from "react";
const login =() =>(
    <>
    <form id='loginForm'>
    <label for='emailLogin'>Email</label>
    <input type='email' id='emailLogin'></input>
    <label for='passwordLogin'>Password</label>
    <input type='password' id='passwordLogin'></input>
    <button>Login</button>
    <a>Create Account</a>
    </form>
    </>
)
export default login;