import dbConnect from "@/dbConnect/connectMongo";
import { eventModel } from "@/models/event-models";
import { mongoose } from "mongoose";

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

export { updateInterest };
