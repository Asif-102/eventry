import dbConnect from "@/dbConnect/connectMongo";
import { eventModel } from "@/models/event-models";

export const getAllEvents = async () => {
  try {
    await dbConnect();

    const allEvents = await eventModel.find();

    return allEvents;
  } catch (err) {
    console.log(err);
  }
};
