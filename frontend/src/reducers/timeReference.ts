const timeReference = (state = 0, action: { type: string; payload: number }) => {
  switch (action.type) {
    case 'SET_REFERENCE_TIME':
      return action.payload;
    default:
      return state;
  }
};

export default timeReference;
