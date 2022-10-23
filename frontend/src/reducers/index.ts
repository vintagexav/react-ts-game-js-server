import tile from './tile';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tile // access in state.tile with useSelector
});

export default rootReducer;
