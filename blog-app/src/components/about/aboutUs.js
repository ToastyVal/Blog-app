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
      </div>
    </div>
  );
}
export default AboutUs;
