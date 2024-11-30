import React from "react";

function TourCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default TourCard;
