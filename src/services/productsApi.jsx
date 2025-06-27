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

export const getProductById = async (productId) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${productId}:`, error);
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
