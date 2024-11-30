// src/pages/Profile.jsx
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setUser, isLoading } = useContext(AuthContext); // Añade isLoading desde el contexto
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Manejar la lógica de redirección solo cuando no está cargando
  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/login"); // Redirige si el usuario no está autenticado
      } else {
        // Configura el estado inicial si el usuario está disponible
        setName(user.name || "");
        setEmail(user.email || "");
      }
    }
  }, [user, isLoading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:5000/api/update-profile",
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setUser(response.data.user); // Actualiza el usuario en el contexto
      navigate("/"); // Redirige al home tras actualizar
    } catch (error) {
      setError("Error al actualizar el perfil.");
    }
  };

  // Muestra un indicador de carga mientras se valida el estado del usuario
  if (isLoading) {
    return <div>Loading...</div>; // O un spinner animado
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold">Edit Profile</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
