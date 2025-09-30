import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const handlePurchase = () => {
    navigate('/payment')
  }

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) return;

    setUser(loggedUser);

    axios
      .get(`http://localhost:3010/users/${loggedUser.id}`)
      .then((res) => {
        setCartItems(res.data.cart || []);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => console.error("Failed to fetch cart:", err));
  }, []);

  const updateCartOnServer = async (newCart) => {
    if (!user) return;

    try {
      const res = await axios.patch(`http://localhost:3010/users/${user.id}`, {
        cart: newCart,
      });
      setCartItems(res.data.cart);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.error("Failed to update cart:", err);
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCartOnServer(updatedCart);
  };

  const handleQuantityChange = (id, value) => {
    if (value < 1) return;
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) item.quantity = value;
      return item;
    });
    updateCartOnServer(updatedCart);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Nav />
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
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
                <p className="text-blue-600 font-bold mt-1">${item.price}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <label>Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="border rounded px-2 w-16"
                  />
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            Total: ${total}
          </h2>
          <button onClick={handlePurchase} className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
            Purchase
          </button>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
