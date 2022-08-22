import React from "react";

import "./aboutUsStyles.css";

function AboutUs() {
  return (
    <div class="wrapper">
      <h1>About Us</h1>
      <div class="cols">
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" id="brandon"></div>
            <div class="back">
              <div class="inner">
                <p>
                  Project Manager and team leader of these kids, I did some
                  stuff and some things.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" id="hunter"></div>
            <div class="back">
              <div class="inner">
                <p>
                  I’m Harris, Hunter Scott Harris…. That’s it. That’s all you
                  get for my bio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" id="jude">
              <div class="inner"></div>
            </div>
            <div class="back">
              <div class="inner">
                <p>One pancake short of a full-stack.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" id="malik">
              <div class="inner"></div>
            </div>
            <div class="back">
              <div class="inner">
                <p>
                  I carry in Val and is constantly called a cheater due to my
                  crazy skills!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" id="ryan">
              <div class="inner"></div>
            </div>
            <div class="back">
              <div class="inner">
                <p>
                  Said helpful things... sometimes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourGoodBye">
        {" "}
        <ul>
          <li>Brandon Lamont Baker- Master of CSS, built the clientside</li>
          <li>Malik Quinn Depasse - Master of Routing, built the clientside</li>
          <li>
            Hunter Scott Harris - Master of back-end, built the java backend
          </li>
          <li>Jude Michael Slovik - Master of Chat, made an instant chat</li>
          <li>Ryan Patrick Griffith - said some helpful things</li>
        </ul>
        <br />
        We all worked on every part of the project with few things made by just
        one person.
        <br />
        Here are our branches with all of our changes{" "}
        <a href="https://github.com/ToastyVal/Blog-app/commits/test-branch(do-not-push-to-here-yet)">
          <span id="linkColor"> Click Me XD</span>
        </a>
        <br />
        On behalf of the excellent team red Hufflepuff we thank you for teaching
        us and all of the dad jokes. We learned a great deal and have grown as
        developers. Never forget to use a VPN!
      </div>
    </div>
  );
}
export default AboutUs;
