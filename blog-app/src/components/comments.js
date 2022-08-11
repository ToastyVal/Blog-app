import React, { useState } from "react";
// import Axios from "axios";

function AppComments() {
  //must create a state
  //   const [userName, setUserName] = useState("");
  const [comment, setComment] = useState({
    commentUserName: "",
    commentText: "",
  });

  function commentInfo(e) {
    console.log(e);
    setComment({ ...comment, [e.target.name]: e.target.value });
  }

  //   const PostComment = () => {};
  //   Axios.post("hhtp://localhost:3001/api/insert", {
  //     userName: userName,
  //     comment: comment,
  //   }).then(() => {
  //     alert("successful insert");
  //   });

  return (
    <>
      <form id="commentForm">
        <label for="commentText">Egg On</label>
        <br />
        <input
          id="commentUserName"
          type="text"
          placeholder="User Name"
          onChange={commentInfo}
        />
        <input
          id="commentText"
          type="text"
          placeholder="Whacha thinking partner?"
          onChange={commentInfo}
        />
        <button>Get-er-Done</button>
      </form>
    </>
  );
}
export default AppComments;
