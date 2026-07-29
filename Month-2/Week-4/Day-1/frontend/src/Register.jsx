import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/create`,
        formData,
      );

      if (result.data?.success) {
        alert(result.data?.message);
      }
    } catch (error) {
      if (error.response) {
        const data = error.response.data;
        if (data.message) {
          alert(data.message);
        }
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Enter your age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
