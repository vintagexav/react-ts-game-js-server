import tile from './tile';
import { combineReducers } from 'redux';
import score from './score';
import time from './time';
import game from './game';
import user from './game';

const rootReducer = combineReducers({
  tile, // access in state.tile with useSelector
  score,
  time,
  game,
  user
});

export default rootReducer;
