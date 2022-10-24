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
      const d = data
        .sort(function (p1: { score: number }, p2: { score: number }) {
          return p2.score - p1.score;
        })
        .slice(0, 10);
      setTopPlayers(d);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};
