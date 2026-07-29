import axios from "axios";
import React from "react";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
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

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        formData,
      );
      

      if (result.data?.success) {
        localStorage.setItem("token",result?.data?.token);
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
