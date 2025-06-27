"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/cartContext";
import { getProductById } from "@/services/productsApi";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Details</h1>

      <div className="grid lg:mx-32 grid-cols-1 md:grid-cols-2 gap-10 border p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain rounded-sm"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-green-600 text-2xl font-bold mb-4">
              ₹{(product.price * quantity).toFixed(2)}
            </p>

            <div className="mb-4">
              <p className="font-medium mb-2">Quantity</p>
              <div className="flex items-center border rounded w-max overflow-hidden">
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => addToCart({ ...product, quantity })}
              className="border border-[#2874F0] text-[#2874F0] py-3 rounded mb-3 hover:bg-[#2874F0] hover:text-white transition w-[300px]"
            >
              Add to Cart
            </button>

            <button
              className="w-[300px] bg-[#2874F0] text-white py-3 rounded hover:bg-white hover:text-[#2874F0] hover:border-[#2874F0] hover:border-1"
            >
              Buy it now
            </button>
          </div>

          <p className="mt-6 text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
