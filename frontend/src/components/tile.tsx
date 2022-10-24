import React from 'react';
import { useSelector } from 'react-redux';

export function Tile(props: { onClick: any; id: number }) {
  const activeTile = useSelector((state: { tile: { gameActive: boolean; activeTile: number } }) => {
    return state.tile;
  });
  const isActive = activeTile.activeTile === props.id;
  const image = process.env.PUBLIC_URL + '/' + (isActive ? 'WAM_Mole.png' : 'WAM_Hole.png');
  return (
    <button
      style={{
        backgroundColor: 'transparent',
        backgroundImage: 'url(' + image + ')',
        marginLeft: '25px',
        marginRight: '25px',
        marginTop: '25px',
        marginBottom: '25px',
        border: 'none',
        cursor: 'pointer'
      }}
      className={`tile ${isActive ? 'tileactive' : 'tileunactive'}`}
      onClick={(e) => {
        props.onClick();
      }}></button>
  );
}
