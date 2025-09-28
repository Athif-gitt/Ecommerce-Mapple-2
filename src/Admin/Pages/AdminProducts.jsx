import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3010/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3010/products/${id}`)
      .then(() => setProducts(products.filter((p) => p.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
      <ProductForm setProducts={setProducts} />
      <ul className="space-y-3 mt-4">
        {products.map((p) => (
          <li key={p.id} className="flex justify-between bg-white shadow p-3 rounded">
            <span>{p.name} - ${p.price}</span>
            <button
              onClick={() => handleDelete(p.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
