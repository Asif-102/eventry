import dbConnect from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-models";
import { replaceMongoIdInObject } from "@/utils/data-util";

const createUser = async (user) => {
  try {
    await dbConnect();

    await new userModel(user).save();
  } catch (err) {
    console.log(err);
  }
};

const findUserByCredentials = async (credentials) => {
  try {
    await dbConnect();

    const user = await userModel.findOne(credentials).lean();
    if (user) {
      return replaceMongoIdInObject(user);
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export { createUser, findUserByCredentials };
