const startGame = () => {
  return {
    type: 'START_GAME'
  };
};
const stopGame = () => {
  return {
    type: 'STOP_GAME'
  };
};
export default {
  startGame,
  stopGame
};
