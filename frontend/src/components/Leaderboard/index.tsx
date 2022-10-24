import React, { useEffect, useState } from 'react';
import styles from './Leaderboard.module.css';
import { LeaderboardPlayer } from '../LeaderboardPlayer';
import { fetchTopPlayers } from '../../controllers/fetchTopPlayers';

interface ILeaderboard {
  setIsOpen: (b: boolean) => void;
}

const Leaderboard = ({ setIsOpen: setIsOpen }: ILeaderboard) => {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetchTopPlayers(setLoading, setPlayers);
  }, []);
  return (
    <div>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className={styles.title}>Leaderboard</div>
        <div className={styles.content}>
          <LeaderboardPlayer score={'Score'} name={'Name'} header={true} />
          {players.map((player: { score: number; name: string }) => (
            <LeaderboardPlayer score={player.score} key={player.name} name={player.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
