const mongoose = require('mongoose');

// Modelo de la reserva
const reservationSchema = new mongoose.Schema({
  selectedTour: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  selectedDate: { type: String, required: true },
  selectedTime: { type: String, required: true },
  email: { type: String, required: true }, // Nuevo campo obligatorio
});


const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
