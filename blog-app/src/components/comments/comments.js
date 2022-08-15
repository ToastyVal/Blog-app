import React, { useEffect, useState } from "react";

function AppComments() {
  // these are the hooks for the data we want to steal from people
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentTEXT, setCommentTEXT] = useState([]);

  const handleClick = (e) => {
    // this will make the button not go to a new page
    e.preventDefault();
    const commentText = { name, comment };
    //this is a test to see if our data is going into the console
    console.log(commentText);

    //now to send our data to sql
    //the url is straight from postman
    fetch("http://localhost:8080/blog/addComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentText),
    }).then((e) => {
      //this lets us know it worked
      console.log("new comment added");
    });
  };

  //this will give use all the comments saved in sql
  useEffect(() => {
    fetch("http://localhost:8080/blog/getAll")
      .then((res) => res.json())
      .then((result) => {
        setCommentTEXT(result);
      });
  }, []);

  return (
    <>
      <form id="commentForm">
        <label>Egg On</label>
        <br />
        <input
          id="commentUserName"
          type="text"
          placeholder="User Name"
          // you must set the value to the useState hook first
          value={name}
          // then make a onchange with e as the event
          // in this case, set name when the event has a value
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="commentText"
          type="text"
          placeholder="Whacha thinking partner?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {/* now we want the data to go somewhere when we click the button */}
        <button onClick={handleClick}>Get-er-Done</button>
      </form>
      <div>
        <h1>Comments</h1>
        {commentTEXT.map((comment) => (
          <>
            <br />
            <h3>
              {/* these call the comment data by their key */}
              {comment.comment} -{comment.name}
            </h3>
            <br />
          </>
        ))}
      </div>
    </>
  );
}
export default AppComments;
