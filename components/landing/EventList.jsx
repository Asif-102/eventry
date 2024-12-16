import { getAllEvents } from "@/actions/events";
import EventCard from "./EventCard";

export default async function EventList() {
  const allEvents = await getAllEvents();
  console.log("🚀 ~ EventList ~ allEvents:", allEvents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <EventCard />
    </div>
  );
}
