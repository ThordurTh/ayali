import React, { useState } from "react";

function YourFormComponent() {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Use the input values as needed
    console.log(inputValues);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default YourFormComponent;
