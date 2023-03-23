import React, { useContext } from "react";
import StylesContext from "../components/StylesContext";


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}