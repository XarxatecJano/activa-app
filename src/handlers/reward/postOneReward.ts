import express from 'express';
import { Reward } from '../../model/types/Reward';
import { insertOneReward } from '../../model/services/rewardServices';

async function postOneReward(req: express.Request, res: express.Response){
   
    const newReward: Reward = { id_user_sender: Number(req.params.id_user),
                                id_user_rewarded: req.body.id_user_rewarded,
                                xp_points: req.body.xp_points,
                                description: req.body.description };
                                
    insertOneReward(newReward, (err: Error, rewardId: number)=>{
        if(err){
            res.status(500).json({"message": err.message});
        } else {
            res.status(200).json({"rewardId": rewardId});
        }
        
        });
}

export {postOneReward};