import tile from './tile';
import { combineReducers } from 'redux';
import score from './score';

const rootReducer = combineReducers({
  tile, // access in state.tile with useSelector
  score // access in state.score with useSelector
});

export default rootReducer;
