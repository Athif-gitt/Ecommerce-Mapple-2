import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      if (!currentUser) return;

      try {
        const res = await axios.get(`http://localhost:3010/users/${currentUser.id}`);
        const userData = res.data;

        setOrders(userData.purchase || []);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  const total = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Order</h1>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-contain mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-blue-600 font-bold mt-1">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <p className="text-gray-800 font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            Total: ${total}
          </h2>

          <button className="w-full bg-cyan-900 text-white py-2 rounded-lg hover:bg-green-600">
            Pending...
          </button>
        </div>
      ) : (
        <p className="text-gray-600">No items in your order.</p>
      )}
    </div>
  );
}
