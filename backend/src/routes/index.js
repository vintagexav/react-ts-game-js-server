// NOTE of course there is no peristence and all is lost when restarting app

import { Router } from "express";

const router = new Router();
const players = [{name:'Demo player',score:3},{name:'Another demo player',score:4},{name:'Could improve player',score:2}]

router.get('/players', (req,res) => {
    return res.send(players)
});
router.post('/player', (req,res) => {
    const player = {score:req.body.score||-1, name:req.body.name||'UNKNOWN'}
    players.push(player)
    return res.send(player)
});
export default router;

//
// const router = (app) => {
//     app.get('/players', (req,res) => {
//         return res.send(players)
//     });
//     app.post('/player', (req,res) => {
//         const player = {score:req.body.score||-1, name:req.body.name||'UNKNOWN'}
//         players.push(player)
//         return res.send(player)
//     });
// }
// export default router
