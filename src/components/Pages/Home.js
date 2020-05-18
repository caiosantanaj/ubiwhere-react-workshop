import React, { Fragment } from 'react';

import BreedItem from './BreedItem';
import { breedsList } from '../../utils/breedsList';

const Home = () => {
  const shuffleRaces = (races) => {
    return races.sort(() => Math.random() - 0.5);
  };

  shuffleRaces(breedsList);

  return (
    <Fragment>
      {/* <p className="welcome-text">{this.state.counterImages}</p> */}
      <div className='wrapper'>
        {breedsList.slice(0, 12).map((raca) => (
          <BreedItem key={`raca${raca}`} raca={raca} />
        ))}
      </div>
    </Fragment>
  );
};
export default Home;
