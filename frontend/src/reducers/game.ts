const game = (state = true, action: { type: string; payload: number }) => {
  switch (action.type) {
    case 'END_GAME':
      return action;
    default:
      return action;
  }
};

export default game;
