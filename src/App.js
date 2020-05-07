// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles.css';
import { breedsList } from './breedsList';
import Race from './Race';
//const RANDOM_IMAGE_FROM_BREED_URL = https://dog.ceo/api/breed/%nome_da_raça%/images/random

const App = () => {
  // const [counterImage, setCounterImage] = useState(0);
  // const [randomStringArray, setRandomStringArray] = useState([1, 2, 3]);

  const shuffleRaces = (races) => {
    return races.sort(() => Math.random() - 0.5);
  };

  // console.log(breedsList);
  shuffleRaces(breedsList);

  return (
    <div className='container'>
      <nav className='navbar welcome-text'>Ubiwhere's React workshop</nav>

      {/* <p className="welcome-text">{this.state.counterImages}</p> */}
      <div className='wrapper'>
        {breedsList.slice(0, 12).map((raca) => (
          <Race key={`raca${raca}`} raca={raca} />
        ))}
      </div>
    </div>
  );
};

export default App;
