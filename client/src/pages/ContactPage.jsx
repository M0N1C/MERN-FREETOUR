import React from "react";

function ContactPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://voss-photography.com/wp-content/uploads/2021/09/friedrichshain-kreuzberg-berlin-sonnenuntergang.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded mb-4"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-bold rounded hover:opacity-80 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
