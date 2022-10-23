import React from 'react';
import { useSelector } from 'react-redux';

export function Tile(props: { onClick: any; id: number }) {
  const activeTile = useSelector((state: { tile: number }) => state.tile);
  const isActive = activeTile === props.id;
  const image = process.env.PUBLIC_URL + '/' + (isActive ? 'WAM_Mole.png' : 'WAM_Hole.png');
  return (
    <button
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}
      className={`tile ${isActive ? 'tileactive' : 'tileunactive'}`}
      onClick={() => {
        props.onClick();
      }}></button>
  );
}
