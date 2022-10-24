import tile from './tile';
import { combineReducers } from 'redux';
import score from './score';
import time from './time';

const rootReducer = combineReducers({
  tile, // access in state.tile with useSelector
  score,
  time
});

export default rootReducer;
