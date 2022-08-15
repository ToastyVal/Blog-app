import React from "react";
// import fakeData from "../assets/fakeData.json";
// you must install axios
// import axios from "axios";
import "./PostList.css";

function PostList() {
  //this is the api post
  // const [posts, setPosts] = useState([]);

  // // this blcok of code does an api call
  // useEffect(() => {
  //   //set the data to a var
  //   const fakeUrl = "https://localhost:8080/blog/getAll";

  //   //fetch data and then turn it into json
  //   fetch(fakeUrl)
  //     .then((resp) => resp.json())
  //     //this now sends the data to the post
  //     .then((resp) => setPosts(resp));
  //   //the data now shows up in the console, this was a test to make sure it works
  //   //   .then((resp) => console.log(resp))
  // }, []); //must have the [] after the useEffect, not sure why

  // <h1>List of Posts</h1>
  // <p>{fakeData.title}</p>
  // {posts.map((post) => (
  //   <div>
  //     {/* this posts the id and the title from the get response */}
  //     <p>{`${post.name}`}</p>
  //   </div>
  // ))}

  //end of api call

  return <div></div>;
}
export default PostList;
