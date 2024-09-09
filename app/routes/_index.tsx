import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { useState } from "react";

export const loader = async () => {
  // In a real app, you might fetch some data here
  return json({
    averageSavings: "$340",
    totalStations: "150,000+",
    activeUsers: "12M+"
  });
};

export default function Index() {
  const { averageSavings, totalStations, activeUsers } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FuelFinder</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Find Gas</a></li>
              <li><a href="#" className="hover:underline">Report Prices</a></li>
              <li><a href="#" className="hover:underline">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Find Cheap Gas Prices in Your Area</h2>
            <p className="text-xl mb-8">Save money on gas and find the cheapest gas stations near you.</p>
            <Form method="get" action="/search" className="max-w-md mx-auto">
              <input
                type="text"
                name="q"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter zip code or city"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-r-lg hover:bg-green-600 transition duration-300">
                Search
              </button>
            </Form>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Why Choose FuelFinder?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{averageSavings}</div>
                <p>Average Annual Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{totalStations}</div>
                <p>Gas Stations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{activeUsers}</div>
                <p>Active Users</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h4 className="text-xl font-bold mb-2">Search</h4>
                <p>Enter your location to find gas stations near you</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-2">Compare</h4>
                <p>View and compare prices at different stations</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚗</div>
                <h4 className="text-xl font-bold mb-2">Save</h4>
                <p>Fill up at the cheapest station and save money</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FuelFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
