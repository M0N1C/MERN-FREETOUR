import React from "react";

function NotFoundPage() {
  return (
    <div className="py-20 text-center bg-gray-100">
      <div className="container">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-8 inline-block px-8 py-3 bg-black text-white font-semibold rounded hover:opacity-80"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
