import Color from "./Color";
import { useState } from "react";
import InputColor from "./InputColor";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <Color color={color}></Color>
      <InputColor color={color} setColor={setColor}></InputColor>
    </div>
  );
}

export default App;
