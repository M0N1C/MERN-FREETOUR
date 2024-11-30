import React from "react";

function AboutPage() {
  return (
    <div className="py-20 bg-white">
      {/* Section 1: Intro */}
      <div className="container text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          At Free Tours, we’re committed to providing you with high-quality, free tours led by passionate guides.
          Our tours combine history, culture, and hidden gems to give you an unforgettable experience.
        </p>
      </div>

      {/* Section 2: More About Us */}
      <div className="container text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          We believe that travel should be accessible to everyone. Our goal is to provide free, informative, and
          fun tours that allow you to explore the world around you without breaking the bank. Whether you’re a solo
          traveler, a group of friends, or a family, our tours are designed to make your journey special.
        </p>
        <div className="max-w-2xl mx-auto">
          <img
            src="https://bucket-files.city-sightseeing.com/blog/2024/03/berlin-view-at-sunset.jpg" // Aquí pon la URL de tu imagen
            alt="Tour group"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 3: Our Values */}
      <div className="container text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Passion</h3>
            <p className="text-gray-600">
              We are passionate about sharing the beauty and history of the places we visit with our guests.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Inclusivity</h3>
            <p className="text-gray-600">
              We welcome everyone, no matter your background or experience. Our tours are for all.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We aim to reduce our environmental impact by promoting sustainable travel and responsible tourism.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Contact */}
      <div className="container text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Have questions or want to join our next tour? Feel free to contact us and we’ll be happy to assist you.
        </p>
        <a
          href="mailto:info@freetours.com"
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
