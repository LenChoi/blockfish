import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reduxStore from './modules/configureStore';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Route path="/blockfish" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </Router>
    </Provider>
  );
}

export default App;
