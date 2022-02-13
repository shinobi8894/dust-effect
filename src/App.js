import "./styles.css";
import Parallax from "parallax-js";
import React, { useRef, useEffect, useState } from "react";

const App = () => {
  const speed = 400;
  const list = useRef(null);
  const [state, setState] = useState([]);

  useEffect(() => {
    const parallax = new Parallax(list.current);
    parallax.enable();

    for (let i = 1; i < 6; i++) {
      twinkleLoop(i);
    }

    function twinkleLoop(i) {
      let duration = Math.random() * 5 + 3;

      duration = duration - (495 - speed) / 100;
      twinkle(i, duration);

      setTimeout(function () {
        twinkleLoop(i);
      }, duration * 1000);
    }

    function twinkle(id, duration) {
      let top = Math.floor(Math.random() * 85) + 0 + "%";
      let left = Math.floor(Math.random() * 85) + 0 + "%";
      setState([]);

      let speck = (
        <div
          key={id}
          className="speck"
          id={`speck${id}`}
          style={{
            top: top,
            left: left,
            animationDuration: duration + "s",
            animationTimingFunction: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
            animationName: "twinkle"
          }}
        ></div>
      );
      setState([speck]);
    }
  }, []);

  return (
    <ul ref={list} id="scene" data-friction-x="0.03" data-friction-y="0.05">
      <li className="layer" id="specks" data-depth="0.1">
        {state.map((speck) => speck)}
      </li>
      <li className="layer" id="layer-1" data-depth="0.15">
        <div className="img" id="img-1"></div>
      </li>
      <li className="layer" id="layer-2" data-depth="0.25">
        <div className="img" id="img-2"></div>
      </li>
      <li className="layer" id="layer-3" data-depth="0.45">
        <div className="img" id="img-3"></div>
      </li>
    </ul>
  );
};

export default App;
