import React from "react";

const Admin = () => {
  return (
    <div>
      <form action="">
        <h1>Welcome back GoatBoss!</h1>
        {/* <img src={Logo} alt="sorry there" style={{ width: "300px" }} /> */}
        <label>Admin Username:</label>
        <br />
        <input placeholder="Enter Username" type="text" required />
        <br />
        <label>Admin Password:</label>
        <br />
        <input placeholder="Enter Password" type="password" required />
        <br />
        <button>Yeehaw</button>
      </form>
    </div>
  );
};

export default Admin;
