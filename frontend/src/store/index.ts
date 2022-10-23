import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tile from '../reducers/tile';
import score from '../reducers/score';
const reducer = combineReducers({
  tile,
  score
});
const index = configureStore({
  reducer
});
export default index;
