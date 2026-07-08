import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
  });


  function handleChange(e) {
    // console.log("input field change",e.target.value)

    const { name, value } = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value
    }));
  }
  function handleRegister() {
    localStorage.setItem("formData", JSON.stringify(formData));
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Enter your age"
        name="age"
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterForm;
