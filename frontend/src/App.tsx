import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions';
import { Tile } from './components/Tile';
import { Score } from './components/Score';
import { Menu } from './components/Menu';
import { Game } from './constants/config';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Whack-a-mole';
  });

  const activeTile = useSelector(
    (state: { tile: { gameActive: boolean; activeTile: number } }) => state.tile
  );
  const tiles = Array.from({ length: Game.AMOUNT_OF_TILES }, (v, k) => k + 1).map((id: number) => (
    <Tile
      key={id}
      id={id}
      onClick={() => {
        if (activeTile.activeTile === id) {
          dispatch(allActions.scoreActions.increaseScore());
          dispatch(allActions.tileActions.setActiveTile(true, 0));
        }
      }}
    />
  ));

  const image = process.env.PUBLIC_URL + '/' + 'WAM_bg.jpg';
  return (
    <div
      className="App"
      style={{
        height: '100%',
        minHeight: '1000px',
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover', //contain will not stretch'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
      }}>
      <Score />
      <Menu />
      <div
        style={{
          paddingTop: '200px',
          paddingBottom: '100px',
          maxWidth: '600px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        <div style={{ marginBottom: '20px' }}></div>
        <div className="tilesContainer">{tiles}</div>
      </div>
    </div>
  );
};

export default App;
