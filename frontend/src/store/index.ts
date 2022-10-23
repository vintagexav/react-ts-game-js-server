import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tile from '../reducers/tile';
const reducer = combineReducers({
  tile
});
const index = configureStore({
  reducer
});
export default index;
