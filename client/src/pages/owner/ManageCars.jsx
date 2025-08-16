import React, { useEffect, useState } from "react";
import { Car, Eye, EyeOff, Trash2, Edit, Settings, Filter } from "lucide-react";

const ManageCars = () => {
  const currency = "$";

  const [cars, setCars] = useState([]);

  // Sample data matching your structure
  const dummyCarData = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      category: "Sedan",
      pricePerDay: 89,
      seating_capacity: "5 seats",
      transmission: "Automatic",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      brand: "Honda",
      model: "CR-V",
      category: "SUV",
      pricePerDay: 125,
      seating_capacity: "7 seats",
      transmission: "CVT",
      isAvailable: false,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      brand: "BMW",
      model: "X5",
      category: "Luxury SUV",
      pricePerDay: 199,
      seating_capacity: "5 seats",
      transmission: "Automatic",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      brand: "Mercedes",
      model: "C-Class",
      category: "Luxury Sedan",
      pricePerDay: 175,
      seating_capacity: "5 seats",
      transmission: "Automatic",
      isAvailable: true,
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      brand: "Audi",
      model: "Q7",
      category: "Luxury SUV",
      pricePerDay: 220,
      seating_capacity: "7 seats",
      transmission: "Automatic",
      isAvailable: false,
      image:
        "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=400&h=300&fit=crop",
    },
  ];

  const fetchOwnerCars = async () => {
    setCars(dummyCarData);
  };

  useEffect(() => {
    fetchOwnerCars();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-10 md:px-10 w-full">
      {/* Title Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Manage Cars
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          View all listed cars, update their details, or remove them from the
          booking platform.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Cars</p>
              <p className="text-xl font-bold text-gray-900">{cars.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-3 rounded-lg">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Available</p>
              <p className="text-xl font-bold text-gray-900">
                {cars.filter((car) => car.isAvailable).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-red-50 p-3 rounded-lg">
              <EyeOff className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Unavailable</p>
              <p className="text-xl font-bold text-gray-900">
                {cars.filter((car) => !car.isAvailable).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                Filter by:
              </span>
            </div>
            <select className="px-3 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Luxury</option>
            </select>
            <select className="px-3 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
            <Car className="w-4 h-4" />
            Add New Car
          </button>
        </div>
      </div>

      {/* Cars Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Car</th>
                <th className="p-4 font-semibold text-gray-700 max-md:hidden">
                  Category
                </th>
                <th className="p-4 font-semibold text-gray-700">Price</th>
                <th className="p-4 font-semibold text-gray-700 max-md:hidden">
                  Status
                </th>
                <th className="p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-blue-50/30 transition-all duration-200 group"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={car.image}
                          alt=""
                          className="w-16 h-12 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {car.brand} {car.model}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {car.seating_capacity} • {car.transmission}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 max-md:hidden">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {car.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-gray-900">
                      {currency}
                      {car.pricePerDay}
                      <span className="text-xs text-gray-500 font-normal">
                        /day
                      </span>
                    </div>
                  </td>
                  <td className="p-4 max-md:hidden">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        car.isAvailable
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}
                    >
                      {car.isAvailable ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group/btn">
                        {car.isAvailable ? (
                          <EyeOff className="w-4 h-4 text-gray-600 group-hover/btn:text-orange-600" />
                        ) : (
                          <Eye className="w-4 h-4 text-gray-600 group-hover/btn:text-green-600" />
                        )}
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group/btn">
                        <Edit className="w-4 h-4 text-gray-600 group-hover/btn:text-blue-600" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group/btn">
                        <Trash2 className="w-4 h-4 text-gray-600 group-hover/btn:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {cars.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No cars found
          </h3>
          <p className="text-gray-500 mb-6">
            Get started by adding your first car to the platform.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Add Your First Car
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageCars;
