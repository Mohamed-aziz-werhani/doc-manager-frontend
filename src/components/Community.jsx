import React from 'react';
import { Users, Building2, Users2 } from 'lucide-react';

function Community() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Manage your entire community <br />
          in a single system
        </h2>
        <p className="mt-4 text-gray-600">Who is docManager suitable for?</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-primaryBlue mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Membership Organisations</h3>
          </div>
          <div className="flex flex-col items-center">
            <Building2 className="w-12 h-12 text-primaryBlue mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">National Associations</h3>
          </div>
          <div className="flex flex-col items-center">
            <Users2 className="w-12 h-12 text-primaryBlue mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Clubs And Groups</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;