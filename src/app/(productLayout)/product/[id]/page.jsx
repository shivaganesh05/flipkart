"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const SelectedProduct = () => {
  const params = useParams();
  const productId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (productId) {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Failed to fetch product", err));
    }
  }, [productId]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded shadow-lg mt-3">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain rounded"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-green-700 text-xl mt-2 font-semibold">₹{(product.price * quantity)}</p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">{product.rating.rate} ★</span>
            <span className="text-gray-600 text-sm">({product.rating.count} reviews)</span>
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="mt-4 flex items-center gap-3">
            <button
              className="w-10 h-10 text-lg border"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="w-10 h-10 text-lg border"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white py-2 px-6 rounded">Add to Cart</button>
            <button className="bg-black text-white py-2 px-6 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
