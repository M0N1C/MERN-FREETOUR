require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User'); // Asegúrate de tener el modelo de usuario

const cors = require('cors'); // Importa cors
const app = express();

// Configura CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5174', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, // Permitir cookies y encabezados con credenciales
}));

app.use(express.json()); 

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Ruta para registro de usuarios (sign-up)
app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match!" });
  }

  // Verificar si el email ya está registrado
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email is already registered' });
  }

  // Cifrar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear el nuevo usuario
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Ruta para iniciar sesión (login)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario existe
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Verificar la contraseña
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generar el token JWT
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});

// Ruta protegida (requiere JWT)
app.get('/protected', (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  // Verificar el token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json({ message: 'Protected data', userId: decoded.userId });
  });
});

// Ruta para verificar el token JWT
app.get('/auth/verify', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Obtenemos el token del encabezado

  // Verificar si no hay token
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verificar el token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // El token es válido, enviamos el usuario decodificado
    res.json({ user: decoded, message: 'Token is valid' });
  });
});




// **Ruta para reservas**
//const reservationsRoutes = require('./routes/reservations');



//app.use('/reservations', reservationsRoutes); // Importa y utiliza las rutas de reservas

// Iniciar el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





// Iniciar el servidor
