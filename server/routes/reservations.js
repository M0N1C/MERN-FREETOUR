const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Esquema de Reservas
const reservationSchema = new mongoose.Schema({
  selectedTour: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  selectedDate: { type: String, required: true },
  selectedTime: { type: String, required: true },
  email: { type: String, required: true }, // Campo del usuario
});

const Reservation = mongoose.model("Reservation", reservationSchema);

// Endpoint POST /reservations
router.post("/", async (req, res) => {
  try {
    const { selectedTour, numberOfPeople, selectedDate, selectedTime, email } = req.body;

    // Validar los datos recibidos
    if (!selectedTour || !numberOfPeople || !selectedDate || !selectedTime || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Crear una nueva reserva
    const newReservation = new Reservation({
      selectedTour,
      numberOfPeople,
      selectedDate,
      selectedTime,
      email,
    });

    await newReservation.save();
    res.status(201).json({ message: "Reservation saved successfully!" });
  } catch (error) {
    console.error("Error saving reservation:", error);
    res.status(500).json({ message: "Error saving reservation." });
  }
});

module.exports = router;


