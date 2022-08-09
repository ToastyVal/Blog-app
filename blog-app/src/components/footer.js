import React from "react";

// the footer function
const Footer = () => (
    <>
        {/* fake contact info and trademark */}
        <h2>Goat Ropers&#174;</h2>
        <ul>
            <li>Contact us</li>
            <li>Some Ranch Near You!</li>
            <li>(555) 555-5555 (hint don't call us!)</li>
            <li>totalyrealemail@gmail.com</li>
        </ul>
        <ul>
            {/* these are the links to things websites need */}
            <li>Help</li>
            <li><a href="https://policies.google.com/terms?hl=en-US">Terms of Service</a></li>
            <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy</a></li>
            {/* made a content policy componenet, needs to go to the content policy component */}
            <li>Content Policy</li>
        </ul>
    </>
)
export default Footer;