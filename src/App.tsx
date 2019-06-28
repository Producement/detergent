import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import ambi from './img/Logo_Ambi_4x.png';
import ariel from './img/Logo_Ariel_4x.png';
import dreft from './img/Logo_Dreft_4x.png';
import oral from './img/Logo_Oral_4x.png';
import tide from './img/Logo_Tide_4x.png';
import tablet from './img/tablet.png';
import success from './img/success.svg';
import twodays from './img/2days_4x.png';
import fourtyeight from './img/48min_4x.png';

import { AnimatedSwitch, spring } from 'react-router-transition';

import SimpleBottomNavigation from './SimpleBottomNavigation';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Top() {
  return (
    <div className="container pt-5 pb-4 bg-white top">
      <h1>Hi Emilee,</h1>
      <p>You're running out of Dreft Pods soon.</p>
      <Link to="/replenish" className="btn btn-outline-primary btn-block">
        Replenish all products
      </Link>
      <Link to="/replenish" className="btn btn-primary btn-block">
        Replenish Dreft Pods
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
          image={dreft}
          title="Platinum All in One"
          brand="Dreft"
          description="Dishwasher tabs"
          amount={10}
        />
        <Card image={ariel} title="Whites" brand="Ariel" description="Washing liquid" amount={30} />
        <Card
          image={ambi}
          title="Lavender Vanilla & Comfort"
          brand="Ambi"
          description="Air Freshener"
          amount={40}
        />
        <Card
          image={oral}
          title="3D White Brilliance"
          brand="Oral B"
          description="Dishwasher tablets"
          amount={60}
        />
        <Card
          image={tide}
          title="Ultra Oxi 4 in 1"
          brand="Tide"
          description="Laundry Pods"
          amount={70}
        />
        <Card
          image={dreft}
          title="Platinum All in One"
          brand="Dreft"
          description="Dishwasher tabs"
          amount={10}
        />
        <Card image={ariel} title="Whites" brand="Ariel" description="Washing liquid" amount={30} />
        <Card
          image={ambi}
          title="Lavender Vanilla & Comfort"
          brand="Ambi"
          description="Air Freshener"
          amount={40}
        />
        <Card
          image={oral}
          title="3D White Brilliance"
          brand="Oral B"
          description="Dishwasher tablets"
          amount={60}
        />
        <Card
          image={tide}
          title="Ultra Oxi 4 in 1"
          brand="Tide"
          description="Laundry Pods"
          amount={70}
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
          <Link to="/replenish" className="btn btn-primary btn-block">
            Replenish
          </Link>
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
            image={dreft}
            title="Platinum All in One"
            brand="Dreft"
            description="Dishwasher tabs"
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
              <Link to="/loading" className="btn btn-light btn-block">
                Confirm order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Order = ({
  image,
  title,
  description,
  bg,
  text,
}: {
  image: string;
  title: string;
  description: string;
  bg?: string;
  text?: string;
}) => {
  return (
    <div className={`card d-flex bg-${bg}`}>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column flex-grow-1 justify-content-center">
          <h2 className={`text-${text}`}>{title}</h2>
          <div className={`text-${text}`}>{description}</div>
        </div>
        <div className="justify-content-center">
          <img className="card-image ml-3" src={image} alt="2 days" />
        </div>
      </div>
    </div>
  );
};

function Orders() {
  return (
    <div className="orders">
      <div className="container pt-5 pb-4 bg-white top">
        <h2>Orders</h2>
      </div>
      <div className="container card-columns min-vh-100 mt-3">
        <Order
          title="Dreft Pods"
          description="Arriving tonight at 18:22"
          image={fourtyeight}
          bg="blue"
          text="light"
        />
        <Order
          title="Oral B, Ambi Pur and 2 more"
          description="Arriving in 2 days at 9:45"
          image={twodays}
        />
        <Link to="/">
          <div className="card order__more d-flex justify-content-center align-items-center">
            <div className="text-muted font-weight-bolder">＋</div>
            Order products
          </div>
        </Link>
      </div>
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

function Loading() {
  return (
    <div className="loading h-100 container pt-5">
      <Link to="/success">
        <h2 className="container text-light">Sending order</h2>
        <p className="container text-light">
          We’re verifying your payment details - <br /> please wait.
        </p>
        <div className="d-flex h-75 justify-content-center align-items-center">
          <div className="lds-ring pb-5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Success() {
  return (
    <div className="success h-100 container pt-5">
      <Link to="/orders">
        <h2 className="container text-dark">Order placed</h2>
        <p className="container text-dark">Your order has been confirmed.</p>
        <div className="d-flex h-75 justify-content-center align-items-center">
          <img src={success} alt="Success" />
        </div>
      </Link>
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
          <Route path="/loading" component={Loading} />
          <Route path="/success" component={Success} />
          <Route path="/" component={Root} />
        </AnimatedSwitch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
