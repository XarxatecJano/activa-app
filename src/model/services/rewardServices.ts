import { Reward } from "../types/Reward";
import { db } from "../../config";
import { OkPacket } from "mysql2";

async function insertOneReward(reward: Reward, callback:Function){
    const queryString = "INSERT INTO reward(id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?,?,?, NOW(), ?)";
    db.query(queryString, [reward.id_user_sender, reward.id_user_rewarded, reward.xp_points, reward.description], (err, result)=>{
        if (err) {
          callback(err, null);
        }
        const rewardId = (<OkPacket> result).insertId;
        callback(null, rewardId);
      })
}

export {insertOneReward};
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