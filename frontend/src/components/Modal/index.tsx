import React from 'react';
import styles from './Modal.module.css';
import { LeaderboardPlayer } from '../LeaderboardPlayer';

interface IModal {
  setIsOpen: (b: boolean) => void;
}

const Modal = ({ setIsOpen: setIsOpen }: IModal) => {
  return (
    <div>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className={styles.title}>Leaderboard</div>
        <div className={styles.content}>
          <LeaderboardPlayer score={'Score'} name={'Name'} header={true} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'ss'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lsdsdsd sdsddska'} />
          <LeaderboardPlayer score={10} name={'sdsdsd sdsddskasdsdsd sdsddska'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
          <LeaderboardPlayer score={10} name={'lukaka'} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
