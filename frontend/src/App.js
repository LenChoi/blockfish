import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reduxStore from './modules/configureStore';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Download from './pages/Download';
import DownloadDetail from './pages/DownloadDetail';
import UserInfo from './pages/UserInfo';
import DownloadList from './pages/DownloadList';

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Route exact path="/blockfish" component={Main} />
        <Route exact path="/blockfish/download" component={Download} />
        <Route path="/blockfish/download/detail/:id" component={DownloadDetail} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Route exact path="/my-page" component={MyPage} />
        <Route path="/my-page/userinfo" component={UserInfo} />
        <Route path="/my-page/download-list" component={DownloadList} />
      </Router>
    </Provider>
  );
}

export default App;
