import React from 'react';
import { Users } from 'lucide-react';

function AboutUs() {
  return (
    <section className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-primaryBlue">docManager</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are dedicated to simplifying document management for businesses and individuals.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
          <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2274"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              At docManager, we aim to provide a seamless and secure platform for managing documents. Whether you're a small business, a national association, or a community group, our tools are designed to help you organize, collaborate, and succeed.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <Users className="w-12 h-12 text-primaryBlue mr-4" />
              <p className="text-lg text-gray-600">Trusted by thousands of organizations worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;