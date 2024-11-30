import React from "react";
import TourCard from "./TourCard";

function TourList({ tours }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours.map((tour, index) => (
        <TourCard
          key={index}
          title={tour.title}
          description={tour.description}
          image={tour.image}
        />
      ))}
    </div>
  );
}

export default TourList;

