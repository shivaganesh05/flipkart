'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import UserForm from './userForm';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';

const Login = () => {
      const handleLogin = async () => {
        const data = {
          username: "johnd",
          password: "m38rmF$",
        };
    
        try {
          const response = await postLogin(data);
          console.log("Token:", response.token);
        } catch (error) {
          console.error("Login failed:", error.message);
        }
      };
    
  return (
    <div className="w-full m-0 h-[420px] bg-white rounded overflow-hidden  flex">
      <div className="w-1/2  bg-[#2874f0] text-white p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="text-sm mt-2 leading-relaxed">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
        <img
          src="/login_img.png" 
          alt="Login Illustration"
          className="w-40 object-contain"
        />
      </div>

      <div className="w-1/2 p-8 mt-6 flex flex-col justify-between">
        <div>
          <Input
            placeholder="Enter User Name"
            className="h-12 px-4 mb-4 border border-gray-300 text-sm"
          />
           <Input
            placeholder="Enter Password"
            className="h-12 px-4 mb-4 border border-gray-300 text-sm"
          />
          <p className="text-xs text-gray-600 mb-6 mt-6">
            By continuing, you agree to Flipkart&apos;s{' '}
            <span className="text-blue-600 underline">Terms of Use</span> and{' '}
            <span className="text-blue-600 underline">Privacy Policy</span>.
          </p>
          <button className="w-full mt-6 bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600 transition" onClick={handleLogin}>
           Login
          </button>
        </div>
         <Dialog>
            <DialogTrigger className="text-sm text-blue-600 text-center mt-6 cursor-pointer">
                         Create an account

            </DialogTrigger>
            <DialogContent className="shadow-lg">
              <DialogTitle className="sr-only">Create an account</DialogTitle>
              <UserForm />
            </DialogContent>
          </Dialog>
        <p className="text-sm text-blue-600 text-center mt-6 cursor-pointer">
        </p>
      </div>
    </div>
  );
};

export default Login;
