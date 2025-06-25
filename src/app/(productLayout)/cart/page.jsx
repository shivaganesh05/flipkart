"use client";

import { useEffect, useState } from "react";
import {
  getCartLists,
  getCartProductsWithDetails,
} from "@/services/productsApi";
import { useRouter } from "next/navigation";

const CartComponent = () => {
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAllCartProducts = async () => {
      try {
        const carts = await getCartLists();

        const allProducts = [];

        for (const cart of carts) {
          if (cart.products?.length) {
            const detailedProducts = await getCartProductsWithDetails(
              cart.products
            );

            const taggedProducts = detailedProducts.map((p) => ({
              ...p,
              cartId: cart.id,
            }));

            allProducts.push(...taggedProducts);
          }
        }

        setAllCartProducts(allProducts);
      } catch (error) {
        console.error("Error fetching all cart products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllCartProducts();
  }, []);

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  if (isLoading) return <p className="p-4">Loading all cart products...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Cart Products</h1>

      {allCartProducts.length === 0 ? (
        <p>No products found in carts.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allCartProducts.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="border rounded p-4 bg-white shadow hover:shadow-lg transition"
              onClick={() => handleClick(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-2"
              />
              <h2 className="font-bold text-md">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
              <div className="flex mt-4 justify-between">
                <div>
                   <p className="text-xs text-gray-400 mt-1">
                {/* Cart ID: {item.cartId} */}
                 Price
              </p>

              <p className="mt-2 font-semibold text-black">
                ₹ {item.price}
              </p>
              </div>
              <div>
                           <p className="text-sm text-gray-500">Qty: {item.quantity}</p>

           <p className="text-sm text-green-600 font-medium mt-2">Total Price: ₹ {item.total}</p>
           </div>
           </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;

// "use client";

// import { useEffect, useState } from "react";
// import { getCartLists, getCartProductsWithDetails } from "@/services/productsApi";
// import { useRouter } from "next/navigation";

// const CartComponent = () => {
//   const [cartInfo, setCartInfo] = useState(null);
//   const [cartProducts, setCartProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
// // console.log(cartProducts,"cartProductscartProducts")
// console.log(cartInfo,"cartInfo")

//   useEffect(() => {
//     const fetchCartWithProducts = async () => {
//       try {
//         const carts = await getCartLists();
//         console.log(carts,"cartscartscartscartscarts")
//         const latestCart = carts?.[carts.length - 2];
//                 // const latestCart = carts[1];

//         if (!latestCart || !latestCart.products) {
//           console.warn("No valid cart found");
//           setCartInfo(null);
//           setCartProducts([]);
//           return;
//         }

//         setCartInfo(latestCart);

//         const productDetails = await getCartProductsWithDetails(latestCart.products);
//         setCartProducts(productDetails);

//       } catch (error) {
//         console.error("Error loading cart data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCartWithProducts();
//   }, []);
//     const handleClick = (id) => {
//     router.push(`/product/${id}`);
//   };

//   if (isLoading) return <p className="p-4">Loading cart items...</p>;

//   return (
//     <div className="p-4">
//       {cartInfo && (
//         <div className="mb-4 text-sm text-gray-600">
//           {/* <p><strong>Cart ID:</strong> {cartInfo.id}</p>
//           <p><strong>User ID:</strong> {cartInfo.userId}</p> */}
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cartProducts.map((item) => (

//           <div key={item.id} className="border rounded p-4 bg-white shadow"
//                onClick={() => handleClick(item.id)}
// >
//             <img src={item.image} alt={item.title} className="h-40 w-full object-contain mb-2" />
//             <h2 className="font-bold text-md">{item.title}</h2>
//             <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
//             <p className="mt-2 font-semibold text-green-600">₹ {item.price}</p>
//             <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//             <div>
//             <p className="text-sm text-black font-medium">Total: ₹ {item.total}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CartComponent;
