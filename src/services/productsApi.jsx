// services/assetService.js
import axios from 'axios';

export const getProductsLists = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export const getProductCategoryLists = async (categoryName) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jewelery products:', error);
    throw error;
  }
};



export const postLogin = async (value) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', value);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getCartLists = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/carts");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart list:", error);
    throw error;
  }
};

// ✅ New helper to fetch product details from cart
export const getCartProductsWithDetails = async (cartProducts) => {
  try {
    const productDetails = await Promise.all(
      cartProducts.map(async (item) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${item.productId}`);
        return {
          ...res.data,
          quantity: item.quantity,
          total: (res.data.price * item.quantity).toFixed(3),
        };
      })
    );
    return productDetails;
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    throw error;
  }
};



export const addUser = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};
