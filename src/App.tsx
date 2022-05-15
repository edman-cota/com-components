import React, { useState } from "react";
import "./App.css";
import SizeSelector from "./components/SizeSelector";

function App() {
  const [currentSize, setCurrentSize] = useState("none");

  return (
    <div className="App App-header">
      <h1>
        Talla seleccionada:
        {currentSize}
      </h1>
      <SizeSelector
        selectedSize={currentSize}
        onSizeChange={(size) => setCurrentSize(size)}
      />
    </div>
  );
}

export default App;
