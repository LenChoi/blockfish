import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './modules/configureStore';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={reduxStore}>
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
            Hello Block-fish!!
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
