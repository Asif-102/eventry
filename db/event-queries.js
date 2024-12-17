import dbConnect from "@/dbConnect/connectMongo";
import { eventModel } from "@/models/event-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import { mongoose } from "mongoose";

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

const updateInterest = async (eventId, authId) => {
  try {
    await dbConnect();

    const event = await eventModel.findById(eventId);

    if (event) {
      const foundUsers = event.interested_ids.find(
        (id) => id.toString() === authId
      );

      if (foundUsers) {
        event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
      } else {
        event.interested_ids.push(new mongoose.Types.ObjectId(authId));
      }

      event.save();
    }
  } catch (err) {
    console.log(err);
  }
};

const updateGoing = async (eventId, authId) => {
  try {
    await dbConnect();

    const event = await eventModel.findById(eventId);

    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save();
  } catch (err) {
    console.log(err);
  }
};

export { getAllEvents, getEventById, updateGoing, updateInterest };
