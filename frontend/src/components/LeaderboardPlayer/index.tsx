import React from 'react';
import styles from './LeaderboardPlayer.module.css';

export function LeaderboardPlayer(props: {
  name: string;
  score: number | string;
  header?: boolean;
}) {
  const color = props.header ? { color: '#818181' } : {};
  return (
    <div className={styles.player}>
      <span style={color}>{props.name}</span>
      <span style={{ float: 'right', ...color }}>{props.score}</span>
    </div>
  );
}
