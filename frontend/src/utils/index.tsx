import { Game } from '../constants/config';

export const randomNumber = () => {
  const min = 1;
  const max = Game.AMOUNT_OF_TILES;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const currentEpochSeconds = () => Math.floor(new Date().getTime() / 1000);
