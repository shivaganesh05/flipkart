"use client";

import { useCart } from "@/context/cartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Your Cart is Empty!</h2>
          <p className="text-gray-500">Please add some products to see them here.</p>
        </div>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="text-green-600 font-bold">
                  ₹{(item.price * item.quantity)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-50 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4 text-right">
        <p className="text-xl font-bold mb-2">Total: ₹{total}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={clearCart}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Clear Cart
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
}
