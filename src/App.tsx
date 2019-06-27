import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
