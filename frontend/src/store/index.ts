import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counter from '../reducers/tile';
const reducer = combineReducers({
  counter
});
const index = configureStore({
  reducer
});
export default index;
