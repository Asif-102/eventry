"use client";

import { useEffect, useState } from "react";

export default function EventVenue({ location }) {
  const [mapUrl, setMapUrl] = useState("");

  const fetchCoordinates = async (location) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          location
        )}&format=json`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&layer=mapnik&marker=${lat}%2C${lon}`;
        setMapUrl(url);
      } else {
        console.error("No coordinates found for location:", location);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  useEffect(() => {
    if (location) {
      fetchCoordinates(location);
    }
  }, [location]);

  return (
    <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
      <div className="w-full">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <p className="text-center text-[#9C9C9C]">Loading map...</p>
        )}
      </div>
      <div className="p-4">
        <p className="text-[#9C9C9C] text-base mt-1">{location}</p>
      </div>
    </div>
  );
}
