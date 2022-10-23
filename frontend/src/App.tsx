import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import allActions from './actions';
import { Tile } from './components/tile';

const App = () => {
  const dispatch = useDispatch();
  /*
      make sure to hide the other mole
  * */

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const move = () => dispatch(allActions.tileActions.setActiveTile(randomNumber(1, 12)));
  const moveMole = () => {
    setTimeout(() => {
      move();
      moveMole();
    }, 2000);
  };
  useEffect(moveMole, []); // componentDidMount
  //
  const activeTile = useSelector((state: { tile: number }) => state.tile);
  const score = useSelector((state: { score: number }) => state.score);
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id: number) => (
    <Tile
      key={id}
      id={id}
      onClick={() => {
        if (activeTile === id) {
          dispatch(allActions.scoreActions.increaseScore());
        }
        move();
      }}
    />
  ));

  const image = process.env.PUBLIC_URL + '/' + 'WAM_bg.jpg';
  return (
    <div
      className="App"
      style={{
        height: '100%',
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}>
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '100px',
          maxWidth: '420px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        <div style={{ marginBottom: '20px' }}>
          {activeTile ? 'active Tile is of id #' + activeTile : 'no tile active'}
          <br />
          score: {score}
        </div>
        <div className="tilesContainer">{tiles}</div>
      </div>{' '}
    </div>
  );
};

export default App;
