import React from "react";
import { FaShieldAlt, FaSearchLocation, FaUndo } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-10">
      <div className=" px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>
        <p className="text-center text-lg mb-12">
          Your trusted platform for posting, tracking, and recovering lost & found items securely.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <FaSearchLocation size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Post Lost & Found Items</h3>
            <p className="text-gray-600">
              Easily create posts to help others find or return lost items with detailed descriptions and locations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <FaUndo size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Recover & Return</h3>
            <p className="text-gray-600">
              Found something? You can help return it to its rightful owner with our recovery and return feature.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <FaShieldAlt size={40} className="text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">JWT Secured Access</h3>
            <p className="text-gray-600">
              We use JSON Web Token (JWT) based authentication to ensure your data and activity remain secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
