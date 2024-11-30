import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context"; 
import BookingForm from "../../components/BookingForm";

function PotsdamPage() {
  const { isLoggedIn } = useContext(AuthContext); // Acceder al estado de autenticación
  const navigate = useNavigate(); // Para redirigir al login si no está logueado
  const [isBooking, setIsBooking] = useState(false);

  const availableDates = [
    {
      date: "2024-12-01",
      times: ["10:00 AM", "2:00 PM", "5:00 PM"],
    },
    {
      date: "2024-12-02",
      times: ["11:00 AM", "3:00 PM", "6:00 PM"],
    },
    {
      date: "2024-12-03",
      times: ["9:00 AM", "1:00 PM", "4:00 PM"],
    },
  ];

  const handleBooking = (bookingDetails) => {
    console.log("Booking details: ", bookingDetails);
    alert(`Booking confirmed for ${bookingDetails.numberOfPeople} people on ${bookingDetails.selectedDate} at ${bookingDetails.selectedTime}`);
    setIsBooking(false);
  };

  const handleBookNowClick = () => {
    if (isLoggedIn) {
      setIsBooking(true); // Si el usuario está logueado, muestra el formulario
    } else {
      alert("You need to be logged in to book a tour.");
      navigate("/login"); // Redirigir al login si no está autenticado
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Potsdam and Sanssouci Palace Tour</h1>
      <img
        src="https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/8eb851c3-cce0-466d-b214-66ff48bc403a-72_f0028731_spsg_sanssouci_palace_potsdam_l.seidel.jpg?w=2000&q=75"
        alt="Potsdam and Sanssouci Palace"
        className="w-full h-64 object-cover mb-6"
      />
      <p className="text-gray-600 mb-4">
        Discover the beautiful city of Potsdam and visit the majestic Sanssouci Palace, a UNESCO World Heritage site and former summer residence of Frederick the Great.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900">Schedule</h2>
      <ul className="text-gray-600 mb-4">
        <li>Monday - Friday: 10:00 AM, 2:00 PM</li>
        <li>Saturday - Sunday: 11:00 AM</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-900">Meeting Point</h2>
      <p className="text-gray-600 mb-4">Meet at Berlin Hauptbahnhof, in front of the main station entrance.</p>
      <h2 className="text-2xl font-semibold text-gray-900">Available Months</h2>
      <p className="text-gray-600">Tours are available year-round, except during major holidays.</p>

      <div className="mt-8">
        <button
          onClick={handleBookNowClick} // Cambié la función para manejar la autenticación
          className="px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black font-semibold rounded hover:from-pink-500 hover:to-orange-400 transition-all"
        >
          Book Now
        </button>
      </div>

      {/* Mostrar el formulario solo cuando isBooking es true */}
      {isBooking && (
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-6">Complete your booking</h2>
          <BookingForm
            tourTitle="Historical Center"
            availableDates={availableDates}
            onBook={handleBooking}
          />
        </div>
      )}
    </div>
  );
}

export default PotsdamPage;
