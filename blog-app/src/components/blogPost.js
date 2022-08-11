import React from "react";
import LikeButton from "./likeButton";
import "./blogPost.css";

const BlogPost = () => (
  <>
    <h2 className="blogTitle">I Reckon!</h2>
    <br />
    {/* this was made to have blog post to work around */}
    <p className="blogPost">
      {" "}
     My name is Cindy Tacklebox and all my life I've wanted to marry me a cowboy! It all started 12 years ago when I was in the nineth grade. My obsession with cowboys didn't start until 
     I noticed how fabulously masculine that fine leather hat fit a top their strong cranium. Now don't you get it wrong or nothin'. My daddy always taught me to find me a man based on his
     personality and his o-filiation with the hard work of an American man, oh boy I'm sweatin' just thinkin' about it now! Havin' said all that now, after years of searchin' and searchin' 
     for my perfect Goat Roper, I found my self stumblin' on in here. I have never, and I mean never, seen a website where a gal like me, Ms.Tacklebox, can so easily scroll around a peruse 
     men like the product they are. I find myself constantly on this site talkin to gals and pals alike! Get yourself on this site ladies and find you a cowboy! 
     <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> #YEEEHHAAAWWWW!</a>
    </p>
    <LikeButton />
    {/* <div>
            <button onClick={Nope}>What in tarnation!&#x1f44e; {disLikeCount}</button>
            <button onClick={YeeHaw}>Purdy! &#128077; {likeCount}</button>
        </div> */}
  </>
);

export default BlogPost;
