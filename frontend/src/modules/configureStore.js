import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './reducers';

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.

export default store;
