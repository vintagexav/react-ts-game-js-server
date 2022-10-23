import React from 'react';
import { useSelector } from 'react-redux';

export function Score() {
  const score = useSelector((state: { score: number }) => state.score);
  return (
    <div
      style={{
        position: 'absolute',
        left: 25,
        top: 25,
        fontWeight: 'bold',
        fontSize: '30px',
        textShadow: '0 0 5px #fff'
      }}>
      <span
        style={{
          color: 'red',
          textShadow: '0 0 5px #fff'
        }}>
        Score
      </span>
      <div
        style={{
          textAlign: 'left'
        }}>
        {score}
      </div>
    </div>
  );
}
