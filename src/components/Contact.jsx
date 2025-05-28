import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get in <span className="text-primaryBlue">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions or inquiries.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryBlue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryBlue"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryBlue"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primaryBlue text-white px-6 py-3 rounded-md hover:bg-secondaryBlue transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-primaryBlue mr-4" />
              <p className="text-gray-600">support@docmanager.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-primaryBlue mr-4" />
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-primaryBlue mr-4" />
              <p className="text-gray-600">1234 Business Ave, Tech City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;