import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tile from '../reducers/tile';
import score from '../reducers/score';
import time from '../reducers/time';
import timeReference from '../reducers/timeReference';
import game from '../reducers/game';

const reducer = combineReducers({
  tile,
  score,
  time,
  timeReference,
  game
});
const index = configureStore({
  reducer
});
export default index;
