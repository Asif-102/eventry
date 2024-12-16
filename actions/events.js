import dbConnect from "@/dbConnect/connectMongo";
import { eventModel } from "@/models/event-models";
import { replaceMongoIdInArray } from "@/utils/data-util";

export const getAllEvents = async () => {
  try {
    await dbConnect();

    const allEvents = await eventModel.find().lean();

    return replaceMongoIdInArray(allEvents);
  } catch (err) {
    console.log(err);
  }
};
