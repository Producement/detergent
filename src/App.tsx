import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import platinum from './img/fairy-platinum-washing-up-liquid-fairy.webp';
import family from './img/fairy-family-pack-fairy.webp';
import lemon from './img/fairy-platinum-washing-up-liquid-lemon.webp';
import all from './img/fairy-platinum-all-in-one-fairy.webp';
import pods from './img/fairy-non-bio-pods-fairy.webp';
import soft from './img/fairy-fabric-softener-original-fairy.webp';
import tablet from './img/tablet.png';
import { AnimatedSwitch, spring } from 'react-router-transition';

import SimpleBottomNavigation from './SimpleBottomNavigation';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Top() {
  return (
    <div className="container pt-5 pb-4 bg-white top">
      <h1>Hi Emilee,</h1>
      <p>You're running out of Draft Pods soon.</p>
      <button className="btn btn-outline-primary btn-block">Replenish all products</button>
      <button className="btn btn-primary btn-block">Replenish Draft Pods</button>
    </div>
  );
}

const Card = ({
  image,
  title,
  description,
  brand,
}: {
  image: string;
  title: string;
  description: string;
  brand: string;
}) => {
  return (
    <Link to="/details">
      <div className="card d-flex flex-row">
        <div className="justify-content-center">
          <img className="card-image mr-3" src={image} alt={title} />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <h2>{title}</h2>
          <div className="mb-3">
            {brand} &#183; {description}
          </div>
          <ProgressBar now={10} variant="danger" />
        </div>
      </div>
    </Link>
  );
};

function Cards() {
  return (
    <div className="container mb-5">
      <div className="card-columns mt-3">
        <Card
          image={platinum}
          title="Platinum All In One"
          brand="Dreft"
          description="Dishwasher tablets"
        />
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={family} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={lemon} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={all} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={pods} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={soft} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={platinum} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={family} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={lemon} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={all} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={pods} alt="Card image cap" />
          </div>
        </Link>
        <Link to="/details">
          <div className="card">
            <img className="card-img-top" src={soft} alt="Card image cap" />
          </div>
        </Link>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div>
      <Top />
      <Cards />
      <SimpleBottomNavigation />
    </div>
  );
}

function Details() {
  return (
    <div className="container bg-white h-100">
      <Link className="text-dark" to="/">
        <div className="float-right mt-3 x">✕</div>
      </Link>
      <div className="text-center">
        <img src={tablet} alt="Tablet" />
      </div>
      <h2>Platinum All in One</h2>
      <p className="text-secondary">Dreft • Dishwasher Tablets</p>
      <div className="details__progress">
        <div>You should have 3 left</div>
        <div className="text-secondary">30 / month</div>
      </div>
      <ProgressBar className="mt-2" now={10} variant="danger" />
      <p className="mt-4">
        Based on your consumption of 30 a month, this should last you a few days
      </p>
      <div className="row mt-5">
        <div className="col-6">
          <button className="btn btn-outline-primary btn-block">Correct data</button>
        </div>
        <div className="col-6">
          <button className="btn btn-primary btn-block">Replenish</button>
        </div>
      </div>
    </div>
  );
}

function glide(val: any) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AnimatedSwitch
          {...pageTransitions}
          mapStyles={(styles: any) => ({
            transform: `translateX(${styles.offset}%)`,
          })}
          className="route-wrapper"
        >
          <Route path="/details" component={Details} />
          <Route path="/" component={Root} />
        </AnimatedSwitch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
