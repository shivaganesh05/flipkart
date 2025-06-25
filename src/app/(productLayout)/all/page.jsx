"use client";
import React, { useEffect, useState } from "react";
import { getElectronicsLists, getProductsLists } from "@/services/productsApi";
import { useRouter } from "next/navigation";
import { useSearch } from "@/app/SearchContext";

const ElectronicsList = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
    const { searchTerm } = useSearch();
  


  const fetchData = async () => {
    try {
      const products = await getProductsLists();
      setProducts(products);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

    const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.title.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product.id)}
          className="cursor-pointer border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-3"
          />
          <h2 className="text-md font-semibold mb-1 line-clamp-2">{product.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <p className="text-sm text-blue-600 mt-2">Category: {product.category}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">₹ {product.price}</span>
            <span className="text-sm bg-yellow-400 px-2 py-1 rounded">
              ⭐ {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElectronicsList;
