import React from "react";

import  "./DrawerToggleButton.css";

const ButtonStyle = {
    width: "75px",
    height: "56px",
    background: "transparent",
    boxSizing: "border-box",
    border: "none",
    position: "fixed",
    marginLeft: "-150px",
    top: 0,
    outline: "none"
}

const drawerToggleButton = props => {
  return (
    <button
      className="toggle-button" toggle-button
      style={ButtonStyle}
      onClick={props.click}
    
    >
      <div className="toggle-button__line" style={{background: "white", width: "30px", height: "2px", margin: "5px"}} />
      <div className="toggle-button__line" style={{background: "white", width: "30px", height: "2px", margin: "5px"}} />
      <div className="toggle-button__line" style={{background: "white", width: "30px", height: "2px", margin: "5px"}} />
    </button>
  );
};

export default drawerToggleButton;
