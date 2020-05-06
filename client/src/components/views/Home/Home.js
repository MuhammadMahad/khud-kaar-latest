import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';
// var bg1 = require('./bg1.jpg');

const Home = () => {
  //   const [Images, setImages] = useState([]);

  //   useEffect(() => {
  //     let images = [];

  //     images.push({
  //       original: `${bg1}`,
  //       thumbnail: `${bg1}`,
  //     });
  //     images.push({
  //       original: `${bg2}`,
  //       thumbnail: `${bg2}`,
  //     });
  //     setImages(images);
  //   }, []);
  return (
    <div
      style={{
        backgroundImage: 'url(' + bg1 + ')',
        backgroundSize: '100%',
        backgroundSize: 'cover',
      }}
    >
      {/* <ImageGallery
        style={{ display: 'flex', width: '100%', height: 'auto' }}
        items={Images}
      /> */}
    </div>
  );
};

export default Home;
