const setActiveTile = (activeTileId: number) => {
  return {
    type: 'SET_ACTIVE_TILE',
    payload: { activeTile: activeTileId }
  };
};

export default {
  setActiveTile
};
