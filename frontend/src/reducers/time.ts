const time = (state = 0, action: { type: string; payload: number }) => {
  switch (action.type) {
    case 'SET_TIME':
      return action.payload;
    default:
      return state;
  }
};

export default time;
