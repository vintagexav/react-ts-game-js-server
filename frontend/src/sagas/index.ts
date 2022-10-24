import { put, takeEvery, all, select } from 'redux-saga/effects';
import allActions from '../actions';
import { currentEpochSeconds, randomNumber } from '../utils';
import { Game, Mole } from '../constants/config';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// CURRENT TIME
function* takeSetTime() {
  yield takeEvery('SET_TIME', updateTime);
}
function* updateTime() {
  yield delay(100);
  yield put(allActions.timeActions.setTime(currentEpochSeconds()));
}
function* selectingTime() {
  const time: number = yield select((state) => {
    return state.time;
  });
  return time;
}

// REFERENCE TIME
function* setEpochTime() {
  yield put(allActions.timeReferenceActions.setReferenceTime(currentEpochSeconds()));
}

function* selectingTimeReference() {
  const timeReference: number = yield select((state) => {
    return state.timeReference;
  });
  return timeReference;
}

// MOVE MOLE
function* takeMoveMole() {
  yield takeEvery(
    'SET_ACTIVE_TILE',
    function* (action: { payload: { gameActive: boolean; activeTile: number }; type: string }) {
      yield delay(Mole.MOVEMENT_SPEED_MS);
      const timeReference: number = yield selectingTimeReference();
      const time: number = yield selectingTime();
      const gameIsActive = time - timeReference < Game.DURATION_SECONDS;
      if (!gameIsActive) {
        yield put(allActions.tileActions.setActiveTile(action.payload.gameActive, 0));
      } else if (action.payload.activeTile > 0) {
        yield put(allActions.tileActions.setActiveTile(action.payload.gameActive, randomNumber()));
      } //otherwise this is a reset action and should not be taken care of
    }
  );
}
function* firstMoveMole() {
  yield put(allActions.tileActions.setActiveTile(true, randomNumber()));
}

// EXPORT
export default function* rootSaga() {
  yield all([
    setEpochTime(),
    // selectingTimeReference(),
    updateTime(),
    takeSetTime(),
    firstMoveMole(),
    takeMoveMole()
    //
  ]);
}
