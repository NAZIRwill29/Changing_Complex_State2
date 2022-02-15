import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setlName] = useState("");

  function updateFName(event) {
    // update the fname
    setFName(event.target.value);
    event.preventDefault();
  }

  function updateLName(event) {
    // update the fname
    setlName(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
