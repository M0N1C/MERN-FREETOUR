const mongoose = require('mongoose');

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,  // Asegura que el correo electrónico sea único
  },
  password: { 
    type: String, 
    required: true 
  },
  // Puedes agregar otros campos si lo deseas
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

// Crear el modelo de usuario a partir del esquema
const User = mongoose.model('User', userSchema);

module.exports = User;


