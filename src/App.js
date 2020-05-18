// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import Breed from './components/Pages/Breed';
//const RANDOM_IMAGE_FROM_BREED_URL = https://dog.ceo/api/breed/%nome_da_raça%/images/random

const App = () => {
  // const [counterImage, setCounterImage] = useState(0);
  // const [randomStringArray, setRandomStringArray] = useState([1, 2, 3]);

  return (
    <Router>
      <div className='container'>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/breed/:breed' component={Breed} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
