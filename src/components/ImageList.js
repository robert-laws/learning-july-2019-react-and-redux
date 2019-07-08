import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map(image => <ImageCard key={image.id} image={image} />)

  return (
    <div className='image-list' style={{marginTop: 10}}>
      {images}
    </div>
  )
}

export default ImageList;