import { ServicePlayers } from '../constants/config';

export const postNewScore = ({ score, name }: { score: number; name: string }) => {
  fetch(`${ServicePlayers.BASE_URL}/player`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      score: score,
      name: name
    })
  }).then((r) => {
    console.log('done');
  });
};
