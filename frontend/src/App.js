import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reduxStore from './modules/configureStore';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Download from './pages/Download';
import DownloadDetail from './pages/DownloadDetail';

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Route exact path="/blockfish" component={Main} />
        <Route exact path="/blockfish/download" component={Download} />
        <Route path="/blockfish/download/detail/:id" component={DownloadDetail} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </Router>
    </Provider>
  );
}

export default App;
