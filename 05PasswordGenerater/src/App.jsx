import { useState, useCallback, useEffect , useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-2 px-3 text-black"
          />

          <button
            className="bg-blue-600 text-white px-4 shrink-0 hover:bg-blue-700"
            onClick={passwordGenerator}
          >
            Generate
          </button>
        </div>

        <div className="flex text-sm gap-x-4 items-center">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))} // Fixed: Cast to Number
            />
            <label>Length ({length})</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed} // Fixed: Changed to checked
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed} // Fixed: Changed to checked
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;