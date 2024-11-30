"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">{count}</h1>
        <div className="flex justify-center space-x-4 ">
          <button
            className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
