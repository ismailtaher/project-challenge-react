import React from "react";
import colorNames from "colornames";

const InputColor = ({
  color,
  setColor,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="inputColor" onSubmit={(e) => e.preventDefault(e)}>
      <label htmlFor="inputColor">Add Color</label>
      <input
        type="text"
        id="inputColor"
        placeholder="&nbsp;Add color name"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputColor;
