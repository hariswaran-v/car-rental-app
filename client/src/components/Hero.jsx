import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center px-4">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Luxury Cars on Rent
      </motion.h1>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-between p-6 md:px-10 gap-6 rounded-xl md:rounded-full w-full max-w-80 md:max-w-200 bg-white/60 backdrop-blur-lg shadow-lg border border-white/30"
      >
        {/* All Fields in Same Row */}
        <div className="flex flex-col md:flex-row items-end gap-6 w-full">
          {/* Pickup Location */}
          <div className="flex flex-col gap-2 w-full md:w-48">
            <label className="text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Select Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="flex flex-col gap-2 w-full md:w-40">
            <label
              htmlFor="pickup-date"
              className="text-sm font-medium text-gray-700"
            >
              Pick-up Date
            </label>
            <input
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-[42px] text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col gap-2 w-full md:w-40">
            <label
              htmlFor="return-date"
              className="text-sm font-medium text-gray-700"
            >
              Return Date
            </label>
            <input
              type="date"
              id="return-date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-[42px] text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-9 py-2 h-[42px] bg-primary hover:bg-primary-dull text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            <img
              src={assets.search_icon}
              alt="search"
              className="brightness-300 w-5 h-5"
            />
            Search
          </motion.button>
        </div>
      </motion.form>

      {/* Car Image */}
      <motion.img
        src={assets.main_car}
        alt="car"
        className="max-h-74 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  );
};

export default Hero;
