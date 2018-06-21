import React from "react";

const ImageCard = props => (
  <div className="test" style={{backgroundImage: `url(${props.image})`}}
  onClick={() => props.imageClicked(props.id)}>

  </div>
);

export default ImageCard;