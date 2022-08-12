import React from "react";
import Footer from "../components/footer/footer";
import BlogPost from "../components/blogPost/blogPost";
import NavBar from "../components/navBar/navBar";
import Comments from "../components/comments/comments";
import PostList from "../API/PostList";
import "../components/styles.css";

// import './styles.css'

function Blogs() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <article>
        <BlogPost />
      </article>
      <Comments />
      <PostList />
      {/* this is the footer that should be on every page */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Blogs;
