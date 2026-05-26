import { useState } from "react"

function App() {
  const [color, setColor] = useState("bg-gray-900")

  return (
    <div className={`h-screen w-full ${color} duration-500`}>

      {/* Center Text */}
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold">
          Background Changer
        </h1>
      </div>

      {/* Button Panel */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg flex gap-4">

        <button
          onClick={() => setColor("bg-red-500")}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:scale-105 transition"
        >
          Red
        </button>

        <button
          onClick={() => setColor("bg-blue-500")}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:scale-105 transition"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("bg-green-500")}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:scale-105 transition"
        >
          Green
        </button>

        <button
          onClick={() => setColor("bg-yellow-400")}
          className="px-4 py-2 bg-yellow-400 text-black rounded-xl hover:scale-105 transition"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("bg-black")}
          className="px-4 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
        >
          Dark
        </button>

      </div>
    </div>
  )
}

export default App