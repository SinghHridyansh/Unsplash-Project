import React from "react";
import "../src/ImageComp.css";

function ImageComp(props) {
  return (
    <div className="pictures" key={props.keys}>
      <img src={props.url} alt=".." className="images" />
      <div className="info">
        <p>{props.users}</p>
        <p>{props.created}</p>
      </div>
    </div>
  );
}

export default ImageComp;
