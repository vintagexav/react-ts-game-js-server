const setTime = (time: number) => {
  return {
    type: 'SET_TIME',
    payload: time
  };
};
export default {
  setTime
};
