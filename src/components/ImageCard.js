import React from "react";

const ImageCard = props => {
  return (
    <div 
      role="img"
      aria-label="click item"
      className="click-that-image" 
      style={{backgroundImage: `url(${props.image})`}} 
      onClick={() => props.imageClicked(props.id, props.clicked)}>
    </div>
  );
};

export default ImageCard;