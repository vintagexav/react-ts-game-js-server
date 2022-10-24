import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Score.module.css';

export function Score() {
  const score = useSelector((state: { score: number }) => state.score);
  return (
    <div className={styles.container}>
      <span className={styles.scoreLabel}>Score</span>
      <div className={styles.score}>{score}</div>
    </div>
  );
}
