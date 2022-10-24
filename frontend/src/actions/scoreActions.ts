const increaseScore = () => {
  return {
    type: 'INCREASE_SCORE'
  };
};
const resetScore = () => {
  return {
    type: 'RESET_SCORE'
  };
};

export default {
  increaseScore,
  resetScore
};
