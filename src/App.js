import Color from "./Color";
import { useState } from "react";
import InputColor from "./InputColor";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkTest, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Color color={color} hexValue={hexValue} isDarkTest={isDarkTest}></Color>
      <InputColor
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkTest={isDarkTest}
        setIsDarkText={setIsDarkText}></InputColor>
    </div>
  );
}

export default App;
