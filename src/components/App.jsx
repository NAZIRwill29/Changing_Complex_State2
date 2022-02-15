import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleOnChange(event) {
    // captuure the value
    const newValue = event.target.value;
    // capture the name of input
    const inputName = event.target.name;
    //update the value
    if (inputName === "fName") {
      setFullName({ fName: newValue });
    } else {
      setFullName({ lName: newValue });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleOnChange}
          placeholder="First Name"
          //value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleOnChange}
          placeholder="Last Name"
          //value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
