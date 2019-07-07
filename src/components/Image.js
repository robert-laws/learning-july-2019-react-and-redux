import React from 'react';

const Image = (props) => {
  return (
    <img src={props.imageSrc} alt={props.altTag} />
  )
}

export default Image;