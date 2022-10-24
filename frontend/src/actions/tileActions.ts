const setActiveTile = (gameActive: boolean, activeTileId: number) => {
  return {
    type: 'SET_ACTIVE_TILE',
    payload: { gameActive: gameActive, activeTile: activeTileId }
  };
};

export default {
  setActiveTile
};
