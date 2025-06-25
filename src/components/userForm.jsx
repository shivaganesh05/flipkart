"use client";
import React, { useState } from "react";
import { addUser } from "@/services/productsApi";
import { Input } from "./ui/input";

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
  });

  const handleChange = (e, path) => {
    const value = e.target.value;
    const keys = path.split(".");

    setFormData((prev) => {
      const updated = { ...prev };
      let nested = updated;

      keys.forEach((key, i) => {
        if (i === keys.length - 1) {
          nested[key] = value;
        } else {
          nested = nested[key];
        }
      });

      return { ...updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await addUser(formData);
      console.log("Submitted:", result);
      alert("User created!");

      setFormData({
        email: "",
        username: "",
        password: "",
        phone: "",
        name: { firstname: "", lastname: "" },
        address: {
          city: "",
          street: "",
          number: "",
          zipcode: "",
          geolocation: { lat: "", long: "" },
        },
      });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed!");
    }
  };

  return (

<form onSubmit={handleSubmit} className="max-w-5xl  p-12 bg-white rounded shadow space-y-4">
  <h2 className="text-xl font-semibold mb-4">Create User (Optional Fields)</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input
      type="text"
      value={formData.email}
      onChange={(e) => handleChange(e, "email")}
      placeholder="Enter Email"
    />
    <Input
      type="text"
      value={formData.username}
      onChange={(e) => handleChange(e, "username")}
      placeholder="Enter Username"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input
      type="password"
      value={formData.password}
      onChange={(e) => handleChange(e, "password")}
      placeholder="Enter Password"
    />
    <Input
      type="text"
      value={formData.phone}
      onChange={(e) => handleChange(e, "phone")}
      placeholder="Enter Phone"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input
      type="text"
      value={formData.name.firstname}
      onChange={(e) => handleChange(e, "name.firstname")}
      placeholder="First Name"
    />
    <Input
      type="text"
      value={formData.name.lastname}
      onChange={(e) => handleChange(e, "name.lastname")}
      placeholder="Last Name"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input
      type="text"
      value={formData.address.city}
      onChange={(e) => handleChange(e, "address.city")}
      placeholder="City"
    />
    <Input
      type="text"
      value={formData.address.street}
      onChange={(e) => handleChange(e, "address.street")}
      placeholder="Street"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input
      type="number"
      value={formData.address.number}
      onChange={(e) => handleChange(e, "address.number")}
      placeholder="Number"
    />
    <Input
      type="text"
      value={formData.address.zipcode}
      onChange={(e) => handleChange(e, "address.zipcode")}
      placeholder="Pin code"
    />
  </div>



  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
    Submit
  </button>
</form>


  );
};

export default UserForm;
