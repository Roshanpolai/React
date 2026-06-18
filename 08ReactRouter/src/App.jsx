import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind CSS Working!
        </h1>
        <p className="text-gray-600">
          Welcome to React + Tailwind CSS 🚀
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;