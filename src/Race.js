import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './utils/img/drawing.svg';

const Race = ({ raca }) => {
  const [imageUrl, setImageUrl] = useState('');

  const getBreedImage = async (breed) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );

      // console.log(response.data);

      let image =
        response.data.message == null || '' ? logo : response.data.message;

      setImageUrl(image);
    } catch (error) {
      console.error(error);
    }
  };

  // const toTitle = (str) => {
  //   const words = str.toLowerCase().split(' ');
  //   const titledStr = [];

  //   for (let word of words) {
  //     if (word !== ' ' && word !== '')
  //       titledStr.push(word[0].toUpperCase() + word.slice(1));
  //   }

  //   return titledStr.join(' ');
  // };

  useEffect(() => {
    if (imageUrl === '') {
      getBreedImage(raca);
    }
    // eslint-disable-next-line
  }, [raca, imageUrl]);

  return (
    <div className='main-content'>
      <p className='race-text'>{raca}</p>
      {imageUrl !== '' && <img src={imageUrl} alt={raca} loading='lazy' />}
    </div>
  );
};

export default Race;
