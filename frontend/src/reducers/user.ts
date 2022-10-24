const user = (state = true, action: { type: string; payload: number }) => {
  switch (action.type) {
    case 'SET_NAME':
      return action;
    default:
      return action;
  }
};

export default user;
