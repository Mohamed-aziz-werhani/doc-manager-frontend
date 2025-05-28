import React from 'react';

function Entreprises() {
  const enterprises = [
    {
      name: 'Deloitte Consulting',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&q=80', // Professional office building
    },
    {
      name: 'Mayo Clinic',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=400&fit=crop&q=80', // Modern hospital
    },
    {
      name: 'Goldman Sachs',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&q=80', // Financial district building
    },
    {
      name: 'Boston University',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=400&fit=crop&q=80', // University campus
    },
    {
      name: 'KPMG',
      image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=400&h=400&fit=crop&q=80', // Corporate office
    },
    {
      name: 'Johnson & Johnson',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop&q=80', // Healthcare research facility
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Our Enterprises</h2>
        <p className="mt-2 text-gray-600">
          We have been working with some leading enterprises
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {enterprises.map((enterprise, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 border-2 border-gray-300 rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src={enterprise.image}
                  alt={enterprise.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">{enterprise.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Entreprises;