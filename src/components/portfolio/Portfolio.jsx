import React, { useState } from "react";

import "./Portfolio.scss";

export default function Portfolio() {

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
          <a href="https://github.com/TamikoSRN/Individual-Project-Henry-Dogs-">
        <div className="item">
          <img src="assets/dogsApp.png" alt="" />
          <h3>(SoyHenry) Dogs App</h3>
        </div>
        </a>
        <a href="https://github.com/TamikoSRN/Fate-Grand-Order">
        <div className="item">
          <img src="assets/fateGOApp.png" alt="" />
          <h3>Fate/Grand Order</h3>
        </div>
        </a>
        <a href="https://github.com/TamikoSRN/Friends-on-Rails">
        <div className="item">
          <img src="assets/friendsOnRailsApp.png" alt="" />
          <h3>Friends on Rails!</h3>
        </div>
        </a>
        <a href="https://github.com/TamikoSRN/Color-Generator">
        <div className="item">
          <img src="assets/tamikolors.png" alt="" />
          <h3>Tami-Kolors!</h3>
        </div>
        </a>
        <a href="https://github.com/technologynippy/mobile-health">
        <div className="item">
          <img src="assets/nippyApp.jpg" alt="" height="400px" width="200px" />
          <h3>Nippy Health</h3>
        </div>
        </a>
        <a href="https://github.com/TamikoSRN/Small-calculator">
        <div className="item">
          <img src="assets/calculatorApp.png" alt="" />
          <h3>React Calculator</h3>
        </div>
        </a>
      </div>
    </div>
  );
}
