import React from "react";
// import ReactDom from "react-dom"
import contentPolicy from "./contentPolicy";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// the footer function
const Footer = () => (
    <BrowserRouter>
        {/* fake contact info */}
        <h2>Goat Ropers</h2>
        <ul>
            <li>Contact us</li>
            <li>Some Ranch Near You</li>
            <li>(555) 555-5555</li>
            <li>totalyrealemail@gmail.com</li>
        </ul>
        <ul>
            {/* these are the links to things websites need */}
            <li>Help</li>
            <li><a href="https://policies.google.com/terms?hl=en-US">Terms of Service</a></li>
            <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy</a></li>
            {/* made a content policy componenet, needs to go to the content policy component */}
            <li><Link to="/contentpolicy">Content Policy</Link></li>
        </ul>
        <Route exact path="/contentpolicy" component={contentPolicy} />
    </BrowserRouter>
)
export default Footer;