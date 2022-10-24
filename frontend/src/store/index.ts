import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tile from '../reducers/tile';
import score from '../reducers/score';
import time from '../reducers/time';
import game from '../reducers/game';
import user from '../reducers/user';
import timeReference from '../reducers/timeReference';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const reducer = combineReducers({
  tile,
  score,
  time,
  timeReference,
  game,
  user
});

const sagaMiddleware = createSagaMiddleware();

const index = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default index;
