import React from 'react';
import Image from './Image';

const ImageList = (props) => {
  const images = props.images.map(({urls, id, alt_description}) => <Image imageSrc={urls.regular} key={id} altTag={alt_description} />)

  return (
    <div style={{marginTop: 10}}>
      {images}
    </div>
  )
}

export default ImageList;