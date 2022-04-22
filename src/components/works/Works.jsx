import React from "react";

import "./Works.scss";

export default function Works() {

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title:"Mobile Application",
      desc:
      "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/nippyApp.jpg"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title:"Mobile Application",
      desc:
      "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/nippyApp.jpg"
    },
    {
      id: "1",
      icon: "./assets/globe.png",
      title:"Mobile Application",
      desc:
      "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/nippyApp.jpg"
    },
  ]
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  exercitationem iste saepe odio fuga corrupti dignissimos
                  deserunt impedit placeat ullam odit hic.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/fateGOApp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}
