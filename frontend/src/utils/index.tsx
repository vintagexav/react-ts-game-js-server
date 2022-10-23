export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const currentEpochSeconds = () => Math.floor(new Date().getTime() / 1000);
