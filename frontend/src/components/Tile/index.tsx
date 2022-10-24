import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Tile.module.css';

export function Tile(props: { onClick: any; id: number }) {
  const activeTile = useSelector((state: { tile: { activeTile: number } }) => {
    return state.tile;
  });
  const isActive = activeTile.activeTile === props.id;
  const image = process.env.PUBLIC_URL + '/' + (isActive ? 'WAM_Mole.png' : 'WAM_Hole.png');
  return (
    <button
      style={{
        backgroundImage: 'url(' + image + ')'
      }}
      className={`${styles.tile} tile ${isActive ? 'tileactive' : 'tileunactive'}`}
      onClick={(e) => {
        props.onClick();
      }}></button>
  );
}
