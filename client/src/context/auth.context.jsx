import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Configuración de la URL de la API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"; // Asegúrate de usar la URL correcta

export const AuthContext = createContext();

export const AuthProviderWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  // Verificar el token al cargar la aplicación
  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user); // Guardar datos del usuario
          setIsLoggedIn(true); // El usuario está logueado
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null); // Si el token es inválido, no hay usuario
        });
    }
  };

  // Función para login
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem("authToken", response.data.token); // Guardar el token
      setUser(response.data.user); // Guardar los datos del usuario
      setIsLoggedIn(true); // El usuario está logueado
      navigate("/"); // Redirigir a la página de inicio
    } catch (error) {
      setAuthError(error.response?.data?.message || "Login failed");
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Función para logout
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null); // Limpiar los datos del usuario
    setIsLoggedIn(false); // El usuario ya no está logueado
    navigate("/login"); // Redirigir al login
  };

  useEffect(() => {
    checkAuth(); // Verificar el estado de autenticación al cargar la app
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};
