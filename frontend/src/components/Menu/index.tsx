import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from '../../constants/config';
import allActions from '../../actions';
import { currentEpochSeconds, randomNumber } from '../../utils';
import Modal from '../Modal';

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
    <div
      style={{
        position: 'absolute',
        left: 25,
        top: 100,
        fontWeight: 'bold',
        fontSize: '30px',
        textShadow: '0 0 5px #fff',
        textAlign: 'left'
      }}>
      <span
        style={{
          fontSize: '20px',
          color: 'red',
          textShadow: '0 0 5px #fff'
        }}>
        Time remaining
      </span>
      <div
        style={{
          marginLeft: '2px'
        }}>
        {timeRemaining > 0 ? (
          <div>
            <div style={{}}>
              {timeRemaining > durationSeconds ? durationSeconds : timeRemaining}
            </div>
          </div>
        ) : (
          <div>
            <div style={{}}>Game over</div>

            <div
              style={{
                fontSize: '20px',
                color: 'red',
                textShadow: '0 0 5px #fff',
                marginTop: '15px'
              }}>
              Menu
            </div>
            <div>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: '-4px',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  // color: '#fb0',
                  textShadow: '0 0 5px #fff'
                }}
                onClick={() => {
                  dispatch(allActions.scoreActions.resetScore());
                  dispatch(allActions.timeReferenceActions.setReferenceTime(currentEpochSeconds()));
                  dispatch(allActions.tileActions.setActiveTile(true, randomNumber()));
                }}>
                Restart
              </button>
              <br />
            </div>
            <button
              onClick={() => setIsOpen(true)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '-4px',
                fontWeight: 'bold',
                fontSize: '30px',
                // color: '#fb0',
                textShadow: '0 0 5px #fff'
              }}>
              Leaderboard
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </div>
        )}
      </div>
    </div>
  );
}
