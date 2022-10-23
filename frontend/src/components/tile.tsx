import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function Tile(props: { onClick: any; id: number }) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(`You clicked ${count} times`);
  // });

  const activeTile = useSelector((state: { tile: number }) => state.tile);
  const isActive = activeTile === props.id;
  const buttonHandler = () => {
    setActive((current) => !current);
  };
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
        buttonHandler();
        setCount(count + 1);
        props.onClick();
      }}></button>
  );
}
