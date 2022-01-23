import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    username: null,
    password: null,
  });
  const handleSubmit = () => {
    setCount((prev) => prev + 1);
    const customEvent = new CustomEvent("message", {
      detail: {
        count,
      },
    });
    window.dispatchEvent(customEvent);
  };

  const handleChange = (e, type) => {
    setData((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  };

  return (
    <div>
      <span>This is Authentication</span>
      <input type="text" onChange={(e) => handleChange(e, "username")} />
      <input type="text" onChange={(e) => handleChange(e, "password")} />
      This is Auth react app
      <button onClick={handleSubmit}>Button</button>
    </div>
  );
};

export default App;
