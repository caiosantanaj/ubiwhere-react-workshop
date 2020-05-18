import React, { useEffect, useState } from 'react';
import axios from 'axios';
import imageNotFound from '../../utils/img/404image.svg';

const Breed = ({ match }) => {
  const [imageUrl, setImageUrl] = useState('');
  const breed = match.params.breed;

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => {
        let image =
          res.data.message == null || '' ? imageNotFound : res.data.message;

        setImageUrl(image);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='detail-page'>
      <div className='codetail-page-contentntent'>
        <h3 className='race-text'>{breed}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          expedita et maiores fuga praesentium suscipit earum reiciendis
          consequatur, quas dolor eos veniam, beatae fugiat error doloribus
          officiis labore, quaerat eaque?
        </p>
      </div>
      {imageUrl !== '' && <img src={imageUrl} alt={breed} loading='lazy' />}
    </div>
  );
};
export default Breed;
