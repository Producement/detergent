import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import platinum from './img/fairy-platinum-washing-up-liquid-fairy.webp';
import family from './img/fairy-family-pack-fairy.webp';
import lemon from './img/fairy-platinum-washing-up-liquid-lemon.webp';
import all from './img/fairy-platinum-all-in-one-fairy.webp';
import pods from './img/fairy-non-bio-pods-fairy.webp';
import soft from './img/fairy-fabric-softener-original-fairy.webp';
import SimpleBottomNavigation from './SimpleBottomNavigation';

function Root() {
  return (
    <div className="container mb-5">
      <div className="card-columns mt-3">
        <div className="card">
          <img className="card-img-top" src={platinum} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={family} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={lemon} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={all} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={pods} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={soft} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={platinum} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={family} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={lemon} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={all} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={pods} alt="Card image cap" />
        </div>
        <div className="card">
          <img className="card-img-top" src={soft} alt="Card image cap" />
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Root} />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
