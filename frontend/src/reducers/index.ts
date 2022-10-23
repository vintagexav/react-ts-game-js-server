import tile from './tile';
import { combineReducers } from 'redux';
import score from './score';
import time from './time';
import game from './game';

const rootReducer = combineReducers({
  tile, // access in state.tile with useSelector
  score,
  time,
  game
});

export default rootReducer;
