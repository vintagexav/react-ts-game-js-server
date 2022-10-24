import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from '../../constants/config';
import allActions from '../../actions';
import { currentEpochSeconds, randomNumber } from '../../utils';
import Leaderboard from '../Leaderboard';
import styles from './Menu.module.css';

export function Menu() {
  const time = useSelector((state: { time: number }) => {
    return state.time;
  });
  const timeReference = useSelector((state: { timeReference: number }) => state.timeReference);
  const durationSeconds = Game.DURATION_SECONDS;
  const timeRemaining = durationSeconds + timeReference - time;

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={styles.c1}>
      <span className={styles.c2}>Time remaining</span>
      <div className={styles.c3}>
        {timeRemaining > 0 ? (
          <div>
            <div>{timeRemaining > durationSeconds ? durationSeconds : timeRemaining}</div>
          </div>
        ) : (
          <div>
            <div>Game over</div>

            <div className={styles.c4}>Menu</div>
            <div>
              <button
                className={styles.c5}
                onClick={() => {
                  dispatch(allActions.scoreActions.resetScore());
                  dispatch(allActions.timeReferenceActions.setReferenceTime(currentEpochSeconds()));
                  dispatch(allActions.tileActions.setActiveTile(true, randomNumber()));
                }}>
                Restart
              </button>
              <br />
            </div>
            <button onClick={() => setIsOpen(true)} className={styles.c5}>
              Leaderboard
            </button>
            {isOpen && <Leaderboard setIsOpen={setIsOpen} />}
          </div>
        )}
      </div>
    </div>
  );
}
