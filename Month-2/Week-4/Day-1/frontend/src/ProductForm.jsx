import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductForm() {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    stocks: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/product/create`,
        productData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );

      if (res.data.success) {
        alert(res.data.message);
        setProductData({
          title: "",
          description: "",
          price: "",
          stocks: "",
        });
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        name="title"
        onChange={handleChange}
        value={productData.title}
      />
      <br />
      <input
        type="text"
        placeholder="Enter description"
        name="description"
        onChange={handleChange}
        value={productData.description}
      />
      <br />
      <input
        type="number"
        placeholder="Enter price"
        name="price"
        onChange={handleChange}
        value={productData.price}
      />
      <br />
      <input
        type="number"
        placeholder="Enter stocks"
        name="stocks"
        onChange={handleChange}
        value={productData.stocks}
      />
      <br />
      <button onClick={handleCreateProduct}>
        {loading ? "creating ..." : "Create Product"}
      </button>
    </div>
  );
}

export default ProductForm;
