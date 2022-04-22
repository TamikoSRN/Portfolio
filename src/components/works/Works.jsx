import React, { useState } from "react";

import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Fate/Grand Order APP (Full-stack app)",
      desc: "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/tamikolors.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Nippy Health (Mobile, React-Native)",
      desc: "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/nippyApp.jpg",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Friends on Rails (Ruby on Rails)",
      desc: "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/friendsOnRailsApp.png",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Tami-Kolors (React)",
      desc: "Lorem Ipsum blablablablablablablablablablablabla.",
      img: "../../../public/assets/tamikolors.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://cdn.nopio.com/wp-content/uploads/2016/05/28094946/web-development.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
