//https://redux-saga.js.org/docs/introduction/BeginnerTutorial
import { put /*put is like dispatch*/, takeEvery, all } from 'redux-saga/effects';
import allActions from '../actions';
import { currentEpochSeconds, randomNumber } from '../utils';
import { Mole } from '../constants/config';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// // REFERENCE TIME
// function* takeSetReferenceTime() {
//   yield takeEvery('SET_REFERENCE_TIME', updateTime);
// }
// TIME
function* takeSetTime() {
  yield takeEvery('SET_TIME', updateTime);
}
function* updateTime() {
  yield delay(100);
  yield put(allActions.timeActions.setTime(currentEpochSeconds()));
}

// REFERENCE TIME
function* setEpochTime() {
  yield put(allActions.timeReferenceActions.setReferenceTime(currentEpochSeconds()));
}

// MOVE MOLE
function* takeMoveMole() {
  yield takeEvery('SET_ACTIVE_TILE', function* (action: { payload: number; type: string }) {
    yield delay(Mole.MOVEMENT_SPEED_MS);
    if (action.payload > 0) {
      yield put(allActions.tileActions.setActiveTile(randomNumber(1, 12)));
    } //otherwise this is a reset action and should not be taken care of
  });
}
function* firstMoveMole() {
  yield put(allActions.tileActions.setActiveTile(randomNumber(1, 12)));
}

// EXPORT
export default function* rootSaga() {
  yield all([
    setEpochTime(),
    updateTime(),
    takeSetTime(),
    firstMoveMole(),
    takeMoveMole()
    //
  ]);
}
