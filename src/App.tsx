import React from 'react';
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
      <Link to="/replenish" className="btn btn-outline-primary btn-block">
        Replenish all products
      </Link>
      <Link to="/replenish" className="btn btn-primary btn-block">
        Replenish Draft Pods
      </Link>
    </div>
  );
}

const Progress = ({
  amount,
  refill,
  className,
}: {
  amount: number;
  refill?: number;
  className?: string;
}) => {
  return (
    <ProgressBar className={className}>
      <ProgressBar
        now={amount}
        variant={amount <= 20 ? 'danger' : amount <= 50 ? 'warning' : 'success'}
      />
      {refill && <ProgressBar now={refill} />}
    </ProgressBar>
  );
};

const Card = ({
  image,
  title,
  description,
  brand,
  amount,
  refill,
}: {
  image: string;
  title: string;
  description: string;
  brand: string;
  amount: number;
  refill?: number;
}) => {
  return (
    <Link to="/details">
      <div className="card d-flex">
        <div className="d-flex flex-row">
          <div className="justify-content-center">
            <img className="card-image mr-3" src={image} alt={title} />
          </div>
          <div className="d-flex flex-column flex-grow-1">
            <h2>{title}</h2>
            <div className="mb-3">
              {brand} &#183; {description}
            </div>
            {!refill && <Progress amount={amount} />}
          </div>
          {refill && (
            <div className="d-flex flex-column">
              <div className="card__price mb-1">12.49€</div>
              <div className="card__amount">for 27 tabs</div>
            </div>
          )}
        </div>
        {refill && <Progress amount={amount} refill={refill} className="mt-3" />}
      </div>
    </Link>
  );
};

function Cards() {
  return (
    <div className="container mb-1">
      <div className="card-columns mt-3">
        <Card
          image={platinum}
          title="Platinum Washing Up Liquid"
          brand="Dreft"
          description="Washing up liquid"
          amount={10}
        />
        <Card
          image={family}
          title="Platinum Family Pack"
          brand="Dreft"
          description="Dishwasher tablets"
          amount={30}
        />
        <Card
          image={lemon}
          title="Platinum Lemon"
          brand="Dreft"
          description="Washing up liquid"
          amount={40}
        />
        <Card
          image={all}
          title="Platinum All In One"
          brand="Dreft"
          description="Dishwasher tablets"
          amount={60}
        />
        <Card
          image={pods}
          title="Non Bio Pods"
          brand="Dreft"
          description="Dishwasher tablets"
          amount={70}
        />
        <Card
          image={soft}
          title="Fabric Softener"
          brand="Dreft"
          description="Fabric softener"
          amount={80}
        />
        <Card
          image={platinum}
          title="Platinum Washing Up Liquid"
          brand="Dreft"
          description="Washing up liquid"
          amount={10}
        />
        <Card
          image={family}
          title="Platinum Family Pack"
          brand="Dreft"
          description="Dishwasher tablets"
          amount={30}
        />
        <Card
          image={lemon}
          title="Platinum Lemon"
          brand="Dreft"
          description="Washing up liquid"
          amount={40}
        />
        <Card
          image={all}
          title="Platinum All In One"
          brand="Dreft"
          description="Dishwasher tablets"
          amount={60}
        />
        <Card
          image={pods}
          title="Non Bio Pods"
          brand="Dreft"
          description="Dishwasher tablets"
          amount={70}
        />
        <Card
          image={soft}
          title="Fabric Softener"
          brand="Dreft"
          description="Fabric softener"
          amount={80}
        />
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

function ReplenishTop() {
  return (
    <div className="container pt-5 pb-4 bg-white top">
      <h2>Replenish products</h2>
      <p className="mt-3 mb-3">
        The following products will be replenished to an estimated one month supply
      </p>
      <div className="replenish__bottom_line mt-1">
        <div className="replenish__total">Order total</div>
        <div className="replenish__price">12.49€</div>
      </div>
    </div>
  );
}

function Replenish() {
  return (
    <div className="replenish h-100">
      <ReplenishTop />
      <div className="container">
        <div className="card-columns pt-3">
          <Card
            image={platinum}
            title="Platinum Washing Up Liquid"
            brand="Dreft"
            description="Washing up liquid"
            amount={10}
            refill={90}
          />
        </div>
      </div>
      <div className="fixed-bottom">
        <div className="container replenish__bottom">
          <div className="row pt-2 pb-2">
            <div className="col-6">
              <Link to="/" className="btn btn-outline-light btn-block text-right">
                Go back
              </Link>
            </div>
            <div className="col-6">
              <Link to="/confirm" className="btn btn-light btn-block">
                Confirm order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div className="orders">
      <div className="container pt-5 pb-4 bg-white top">
        <h2>Orders</h2>
      </div>
      <div className="container min-vh-100 mt-3" />
      <SimpleBottomNavigation />
    </div>
  );
}

function Settings() {
  return (
    <div className="settings">
      <div className="container pt-5 pb-4 bg-white top">
        <h2>Settings</h2>
      </div>
      <div className="container min-vh-100 mt-3" />
      <SimpleBottomNavigation />
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
          <Route path="/replenish" component={Replenish} />
          <Route path="/orders" component={Orders} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Root} />
        </AnimatedSwitch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
