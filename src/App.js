import Color from "./Color";
import { useState } from "react";
import InputColor from "./InputColor";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Color color={color} hexValue={hexValue} isDarkText={isDarkText}></Color>
      <InputColor
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}></InputColor>
    </div>
  );
}

export default App;
