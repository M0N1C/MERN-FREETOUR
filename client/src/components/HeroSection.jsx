import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="relative bg-gray-100 text-center py-20 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://voss-photography.com/wp-content/uploads/2021/09/friedrichshain-kreuzberg-berlin-silvester.jpg')",
        backgroundPosition: "center center", // Centra la imagen
        backgroundSize: "cover", // La imagen cubre todo el fondo, sin repetirse
        backgroundRepeat: "no-repeat", // Evita que se repita
      }}
    >
      {/* Contenedor del contenido de texto */}
      <div className="container mx-auto relative z-10 px-4 text-center border-4 border-white rounded-lg p-8 bg-opacity-50 bg-black">
        <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Discover Berlin Like Never Before
        </h1>
        <p className="text-lg text-white max-w-3xl mx-auto mb-12">
          Berlin, a city brimming with history, art, and culture, awaits your exploration. 
          Dive into our specially curated tours designed to bring the city's unique character to life. 
          Wander through historic landmarks like the Brandenburg Gate, trace the echoes of the Cold War 
          along the Berlin Wall, or lose yourself in the vibrant creativity of Berlin's street art. 
          Whether you're fascinated by history, drawn to nature, or eager to uncover hidden gems, 
          our tours offer something for everyone. Join us and let Berlin's stories captivate your heart!
        </p>
        <p className="text-lg text-white max-w-3xl mx-auto mb-8">
          Our tours operate on a "pay what you want" basis. This means you can join for free, 
          but at the end of the tour, you're welcome to leave a voluntary tip based on your experience 
          and appreciation for your guide's effort. This flexible model ensures everyone can enjoy the tours, 
          while also supporting the dedicated guides who make your Berlin adventure unforgettable.
        </p>
        <Link
          to="/tours"
          className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-all"
        >
          View Tours
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;

