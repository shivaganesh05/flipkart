"use client";
import { useSearch } from "@/app/SearchContext";
import { getProductsLists, getProductCategoryLists } from "@/services/productsApi";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { catagoryId } = useParams();
  const router = useRouter();
  const { searchTerm } = useSearch();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await getProductCategoryLists(catagoryId);
        setCategoryProducts(res);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [catagoryId]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await getProductsLists();
        setAllProducts(res);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    fetchAllData();
  }, []);


  const filteredProducts = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });

  const productsToShow = searchTerm ? filteredProducts : categoryProducts;

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  if (isLoading) {
    return <p className="text-center mt-10 text-gray-500">Loading products...</p>;
  }

  return (
    <div className="p-5">
      {productsToShow.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToShow.map((product) => (
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
              <h2 className="text-md font-semibold mb-1 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <p className="text-sm text-blue-600 mt-2">
                Category: {product.category}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  ₹ {product.price}
                </span>
                <span className="text-sm bg-yellow-400 px-2 py-1 rounded">
                  ⭐ {product.rating.rate} ({product.rating.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
       <div className="flex items-center justify-center mt-20">
  <div className="text-center bg-gray-100 p-6 rounded-2xl shadow-md max-w-2xl w-full">
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Products Found</h2>
    <p className="text-gray-500 text-base">
      We couldn’t find any products for{" "}
      <span className="font-semibold text-gray-700">"{searchTerm}"</span>.
    </p>
  </div>
</div>

      )}
    </div>
  );
};

export default Page;
