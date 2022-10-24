const setName = (name: string, score: number) => {
  return {
    type: 'SET_NAME',
    payload: { name, score }
  };
};

export default {
  setName
};
