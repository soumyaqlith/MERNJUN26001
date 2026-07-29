import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/product/get-all`,
      );
      setProducts(res.data?.products);
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
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      {products?.map((product) => (
        <div key={product._id}>{product.title}</div>
      ))}
    </div>
  );
}

export default Products;
