"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertOneReward = void 0;
const config_1 = require("../../config");
function insertOneReward(reward, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "INSERT INTO reward(id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?,?,?, NOW(), ?)";
        config_1.db.query(queryString, [reward.id_user_sender, reward.id_user_rewarded, reward.xp_points, reward.description], (err, result) => {
            if (err) {
                callback(err, null);
            }
            const rewardId = result.insertId;
            callback(null, rewardId);
        });
    });
}
exports.insertOneReward = insertOneReward;
/*
async function insertOneUser(user: User, callback: Function){
      const queryString = "INSERT INTO user(email, password, role, createdAt) VALUES(?, ?, ?, NOW())";
      const hashPassword = await bcrypt.hash(user.password, 10);
      db.query(queryString, [user.email, hashPassword, user.role], (err, result)=>{
        if (err) {
          callback(err, null);
        }
        const userId = (<OkPacket> result).insertId;
        callback(null, userId);
      });
}


*/ 
