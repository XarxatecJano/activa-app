"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rewardRouter = void 0;
const express_1 = __importDefault(require("express"));
const showRewardsUI_1 = require("../handlers/reward/showRewardsUI");
const validateToken_1 = require("../utils/validateToken");
const postOneReward_1 = require("../handlers/reward/postOneReward");
const rewardRouter = express_1.default.Router();
exports.rewardRouter = rewardRouter;
rewardRouter.get("/UI", validateToken_1.validateToken, showRewardsUI_1.showRewardsUI);
rewardRouter.post("/:id_user", validateToken_1.validateToken, postOneReward_1.postOneReward);
