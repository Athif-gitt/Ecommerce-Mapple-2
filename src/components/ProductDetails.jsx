import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state || {
    name: "Sample Product",
    price: 199.99,
    description: "This is a minimal product detail page.",
    image: "https://via.placeholder.com/400",
    id: 1,
  };

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const cart = user.cart || [];
    const existing = cart.find((i) => i.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("user", JSON.stringify({ ...user, cart }));
    alert("Added to cart!");
    navigate("/cart");
  };

  const handleBuyNow = () => {
    navigate("/payment", { state: { product } });
  };

  return (
    <div className="max-w-lg mx-auto p-4 min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-md p-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain rounded-lg mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
        <p className="text-green-600 font-bold text-lg my-2">${product.price}</p>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        <div className="flex gap-3">
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
