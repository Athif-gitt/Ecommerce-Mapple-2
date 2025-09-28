import React from "react";
// import { Link } from 'react-router-dom';
import Login from "./features/auth/Login";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Nav />
      <section className="text-center py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Mapple
        </h2>
        <p className="text-gray-600 mb-6">
          Your one-stop shop for premium 3rd party Apple products
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Browse Products
        </button>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://www.apple.com/v/iphone/home/ce/images/overview/select/iphone_17pro__0s6piftg70ym_large_2x.jpg"
              alt="iPhone"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">iPhone</h4>
              <p className="text-gray-600 text-sm">Latest 3rd party models</p>
              <div className="flex justify-between items-center mt-3">
                <h5 className="text-blue-600">Starting from</h5>
                <span className="text-xl font-bold text-green-600">$799</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://www.apple.com/v/macbook-air/v/images/overview/routers/compare_mba_13_15__caznvrb61zyu_large_2x.png"
              alt="MacBook"
              className="w-48 h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">MacBook</h4>
              <p className="text-gray-600 text-sm">High-performance laptops</p>
              <div className="flex justify-between items-center mt-3">
                <h5 className="text-blue-600">Starting from</h5>
                <span className="text-xl font-bold text-green-600">$799</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="https://www.apple.com/v/airpods/shared/compare/f/images/compare/compare_airpods_4__fy4e25bzx1u2_large_2x.png"
              alt="AirPods"
              className="w-full h-48 object-cover bg-contain"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">AirPods</h4>
              <p className="text-gray-600 text-sm">Wireless audio devices</p>
              <div className="flex justify-between items-center mt-3">
                <h5 className="text-blue-600">Starting from</h5>
                <span className="text-xl font-bold text-green-600">$799</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2025 Mapple. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
