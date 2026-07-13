import axios from "axios";
import React, { useState } from "react";

function PostData() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleRegister() {
    try {
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        formData,
      );
      console.log(result.data)
    } catch (error) {
      console.log("register error", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        name="fullName"
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default PostData;
