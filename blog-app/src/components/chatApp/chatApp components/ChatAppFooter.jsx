import React from "react";
import './ChatAppFooter.css';


// the footer function
const ChatAppFooter = () => (
    <>
        {/* fake contact info and trademark */}
        <h2>Goat Ropers&#174;</h2>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qwMLabWRrXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="myDog"></iframe> */}
        <ul>
            <li>Contact us</li>
            <li>Some Ranch Near You!</li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target= "_blank">(602) 996-1140 (hint don't call us!)</a></li>
            <li>totalyrealemail@gmail.com</li>
        </ul>
        <ul>
            {/* these are the links to things websites need */}
            <li>Help</li> 
            <li><a href="https://policies.google.com/terms?hl=en-US">Terms of Service</a></li>
            <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy</a></li>
            {/* made a content policy componenet, needs to go to the content policy component */}
            {/* <li>
                <a href='../routes/ContentPolicy' >Content Policy</a>
            </li> */}
        </ul>
    </>
)
export default ChatAppFooter;