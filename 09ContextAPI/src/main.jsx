import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContext } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext.Provider value="Roshan">
    <App />
  </UserContext.Provider>
);