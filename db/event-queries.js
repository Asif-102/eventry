import dbConnect from "@/dbConnect/connectMongo";
import { eventModel } from "@/models/event-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

const getAllEvents = async () => {
  try {
    await dbConnect();

    const allEvents = await eventModel.find().lean();

    return replaceMongoIdInArray(allEvents);
  } catch (err) {
    console.log(err);
  }
};

const getEventById = async (eventId) => {
  try {
    await dbConnect();

    const event = await eventModel.findById(eventId).lean();

    return replaceMongoIdInObject(event);
  } catch (err) {
    console.log(err);
  }
};

export { getAllEvents, getEventById };
