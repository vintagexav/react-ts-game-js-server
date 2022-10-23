import React, { useEffect, useState } from 'react';

export function Tile(props: { onClick: any; id: number }) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(`You clicked ${count} times`);
  // });
  const buttonHandler = () => {
    setIsActive((current) => !current);
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
