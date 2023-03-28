import React from "react";

export default function Tooltip({ position }) {
  const tooltipStyles = {
    top: {
      top: "34%",
      left: "47%",
    },
    bottom: {
      bottom: "30%",
      left: "47%",
    },
  };

  let styles = null;
  switch (position) {
    case "top":
      styles = tooltipStyles.top;
      break;
    case "bottom":
      styles = tooltipStyles.bottom;
      break;

    default:
      console.log("position is not defined");
      break;
  }
  return (
    <div style={styles} className="tooltipBox">
      Tooltip is Here...
    </div>
  );
}

/*
const tooltipStyles = {
    left:{
        left:"22%",
        top:"49%",
    },
    right:{
        right:"10%",
        top:"49%"
    },
    top:{
        top:"35%",
        left: "47%"  
          },
    bottom:{
        bottom:"30%" ,
        left: "47%"
    }
  }
let styles=null;
switch (position) {
    case "left":
        styles = tooltipStyles.left;
        break;
    case "right":
        styles = tooltipStyles.right;
        break;
    case "top":
        styles = tooltipStyles.top;
        break;
    case "bottom":
        styles = tooltipStyles.bottom;
        break;

    default:
        console.log('position is not defined');
        break;
}

*/
