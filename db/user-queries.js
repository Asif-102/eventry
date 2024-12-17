import dbConnect from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-models";

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
    return user;
  } catch (err) {
    console.log(err);
  }
};

export { createUser, findUserByCredentials };
