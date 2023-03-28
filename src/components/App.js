import { useState } from "react";
import "../styles/index.css";
import Tooltip from "./Tooltip";

function App() {
  const [position, setPosition] = useState(""); //just to set position of mouse on hover
  const [isMouseOnELement, setIsMouseOnELement] = useState(false); //is for is mouse on element or not

  const onHover = (event) => {
    const element = document.getElementById("text");
    setIsMouseOnELement(true);

    const coordinates = element.getBoundingClientRect();
    const midOfElementAlongY = coordinates.top + coordinates.height / 2; //find mid of element,and on hover < mid display toolkit above an element and if >mid show toolkit below an element
    const mouseCoordinate_Y = event.clientY; //find mouse Y axis coordinate on hover

    if (mouseCoordinate_Y <= midOfElementAlongY) {
      setPosition("top");
    } else {
      setPosition("bottom");
    }
  };

  const onLeave = (event) => {
    setIsMouseOnELement(false);
  };

  return (
    <div className="App">
      <span id="text" onMouseOver={onHover} onMouseLeave={onLeave}>
        Press
      </span>
      {isMouseOnELement && <Tooltip position={position} />}
    </div>
  );
}

export default App;
