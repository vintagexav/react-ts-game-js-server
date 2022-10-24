import { Dispatch, SetStateAction } from 'react';
import { ServicePlayers } from '../constants/config';

export const fetchTopPlayers = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setTopPlayers: Dispatch<SetStateAction<never[]>>
) => {
  setLoading(true);
  fetch(`${ServicePlayers.BASE_URL}/players`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setTopPlayers(
        data
          .sort((p1: { score: number }, p2: { score: number }) => p1.score < p2.score)
          .slice(0, 10)
      );
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
