import { all, put, select, takeEvery } from 'redux-saga/effects';
import allActions from '../actions';
import { currentEpochSeconds, delay, randomNumber } from '../utils';
import { Game, Mole } from '../constants/config';

// ENTITIES UTILS
function* isGameActive() {
  const timeReference: number = yield selectingTimeReference();
  const time: number = yield selectingTime();
  return time - timeReference < Game.DURATION_SECONDS;
}

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

      if (!(yield isGameActive())) {
        if (action.payload.activeTile != Game.RESET_TILE_ID)
          yield put(allActions.gameActions.endGame());
        yield put(
          allActions.tileActions.setActiveTile(action.payload.gameActive, Game.RESET_TILE_ID)
        );
      } else if (action.payload.activeTile != Game.RESET_TILE_ID) {
        // const enteredName = prompt('Please enter your name');
        yield put(allActions.tileActions.setActiveTile(action.payload.gameActive, randomNumber()));
      } //otherwise this is a reset action and should not be taken care of
    }
  );
}

// END GAME
function* takeEndGame() {
  yield takeEvery('END_GAME', function* (action: any) {
    const score: number = yield select((state) => {
      return state.score;
    });
    const name = prompt(`What's your name? Score: ${score}`);

    yield put(allActions.userActions.setName(name || '', score));
  });
}

function* takeUserName() {
  yield takeEvery('SET_NAME', function (action: any) {
    const name = action.payload.name;
    const score = action.payload.score;
    alert(name);
    alert(score);
  });
}

function* firstMoveMole() {
  yield put(allActions.tileActions.setActiveTile(true, randomNumber()));
}

// EXPORT
export default function* rootSaga() {
  yield all([
    setEpochTime(),
    // selectingTimeReference(),<<
    updateTime(),
    takeSetTime(),
    firstMoveMole(),
    takeMoveMole(),
    takeEndGame(),
    takeUserName()
    //
  ]);
}
