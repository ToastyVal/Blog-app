import React, { Component, useState } from "react";
import Axios from "axios";

import React, { useState } from "react";
// import Axios from "axios";

class AppComments extends Component {
  //must create a state
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch("http://localhost:3000", {
      method: "POST",
      body: {
        UserName: self.refs.UserName,
        CommentInfo: self.refs.CommentInfo,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
      });
  }

  //   const [userName, setUserName] = useState("");
  //   const [comment, setComment] = useState({
  //     commentUserName: "",
  //     commentText: "",
  //   });

  //   function commentInfo(e) {
  //     console.log(e);
  //     setComment({ ...comment, [e.target.name]: e.target.value });
  //   }

  //   const PostComment = () => {};
  //   Axios.post("hhtp://localhost:3001/api/insert", {
  //     userName: userName,
  //     comment: comment,
  //   }).then(() => {
  //     alert("successful insert");
  //   });
  render() {
    return (
      <>
        <form id="commentForm">
          <label for="commentText">Egg On</label>
          <br />
          <input
            id="commentUserName"
            type="text"
            placeholder="User Name"
            ref="UserName"
          />
          <input
            id="commentText"
            type="text"
            placeholder="Whacha thinking partner?"
            ref="CommentInfo"
          />
          <button>Get-er-Done</button>
        </form>
      </>
    );
  }
}
export default AppComments;
