import express from 'express';
import { showRewardsUI } from '../handlers/reward/showRewardsUI';
import { validateToken } from '../utils/validateToken';
import { postOneReward } from '../handlers/reward/postOneReward';


const rewardRouter = express.Router();

rewardRouter.get("/UI", validateToken, showRewardsUI);

rewardRouter.post("/:id_user", validateToken, postOneReward);

export {rewardRouter};