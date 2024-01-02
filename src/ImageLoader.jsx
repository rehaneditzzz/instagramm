import React from 'react';

const ImageLoader = ({ handleNewLike }) => {
  return (
    <div>
      <img
        src="https://unsplash.com/s/photos/random"
        alt="Sample Image"
        style={{ width: '100%', height: 'auto' }}
      />
      <button onClick={handleNewLike}>Like</button>
    </div>
  );
};

export default ImageLoader;

