const game = (state = false, action: { type: string }) => {
  switch (action.type) {
    case 'START_GAME':
      return true;
    case 'STOP_GAME':
      return false;
    default:
      return state;
  }
};

export default game;
