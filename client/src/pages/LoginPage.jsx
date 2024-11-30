import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context"; // Importa el AuthContext

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Para redirigir al usuario después del login

  const { login } = useContext(AuthContext); // Desestructuramos el login del AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamamos al login desde el contexto en lugar de hacer una petición fetch directamente
      await login(email, password); // El login se maneja desde el AuthContext

      // Si el login es exitoso, se redirige al usuario a la página principal o a una página protegida
      navigate("/"); // Redirigir a la página principal o cualquier ruta protegida
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://voss-photography.com/wp-content/uploads/2016/09/berlin-skyline-sonnenuntergang-molecule-man.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Mostrar errores */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
          >
            Log In
          </button>
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-black">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

