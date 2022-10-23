import allActions from '../actions';
import { currentEpochSeconds } from '../utils';
import { useDispatch } from 'react-redux';

const time = (state = 0, action: { type: string; payload: number }) => {
  // const dispatch = useDispatch();
  switch (action.type) {
    case 'SET_TIME':
      // dispatch(allActions.timeReferenceActions.setReferenceTime(currentEpochSeconds()));
      return action.payload;
    default:
      return state;
  }
};

export default time;
