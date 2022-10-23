const setActiveTile = (id: number) => {
  return {
    type: 'SET_ACTIVE_TILE',
    payload: id
  };
};

export default {
  setActiveTile
};
