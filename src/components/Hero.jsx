import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-gray-50 min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Solutions and tools derived<br />
            <span className="text-primaryBlue">from field experience</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
          Platform or cloud: where should you manage your documents?
          </p>
          <a
            href="#register"
            className="mt-6 inline-block bg-primaryBlue text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-secondaryBlue transition"
          >
            Register
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Placeholder pour l'illustration */}
          <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2274"
                alt="Document Management"
                className="rounded-lg shadow-xl"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;