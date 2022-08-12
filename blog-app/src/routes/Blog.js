import React from "react";
import Footer from "../components/footer";
import BlogPost from "../components/blogPost";
import NavBar from "../components/navBar";
import Comments from "../components/comments";
import PostList from "../API/PostList";
import "../components/styles.css";
import Search from "../components/search";

// import './styles.css'

function Blogs() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Search />
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
