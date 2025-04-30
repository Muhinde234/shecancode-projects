
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const SimpleForm = () => { 

const schema = z.object({
  name: z.string().min(8, "Name is required"),
  email: z.string().email("Invalid email address"),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, "You must be at least 18 years old"),
});



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });


  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("Form submitted!");
    reset(); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg rounded-lg ">
      <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
     
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.name && (
            <p className="text-black text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

       
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.email && (
            <p className="text-black text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

       
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.age && (
            <p className="text-black text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

       
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-black transition-colors duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default SimpleForm