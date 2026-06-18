import React from "react";
import Square from "./components/Square/Square";
import "./App.css";

function App(){
  return(
    <>
      <div className="board">
        <div>
          <Square value=""/>
          <Square value=""/>
          <Square value=""/>
        </div>

        <div>
          <Square value=""/>
          <Square value=""/>
          <Square value=""/>
        </div>

        <div>
          <Square value=""/>
          <Square value=""/>
          <Square value=""/>
        </div>
      </div>
    </>
  )
}

export default App;