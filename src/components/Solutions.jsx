import React from 'react';
import { Database, Share2, Shield, BarChart2, Globe, Server } from 'lucide-react';

function Solutions() {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-primaryBlue" />,
      title: "Gestion documentaire centralisée",
      description: "Tous vos documents organisés et accessibles en un seul endroit sécurisé",
    },
    {
      icon: <Share2 className="w-8 h-8 text-secondaryGreen" />,
      title: "Collaboration simplifiée",
      description: "Partagez des fichiers avec vos équipes en quelques clics",
    },
    {
      icon: <Shield className="w-8 h-8 text-secondaryRed" />,
      title: "Sécurité renforcée",
      description: "Chiffrement des données et contrôle d'accès granulaire",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-secondaryPurple" />,
      title: "Analytiques avancés",
      description: "Suivez l'utilisation et obtenez des insights sur vos documents",
    },
    {
      icon: <Globe className="w-8 h-8 text-secondaryOrange" />,
      title: "Accessibilité totale",
      description: "Accédez à vos documents depuis n'importe quel appareil",
    },
    {
      icon: <Server className="w-8 h-8 text-secondaryIndigo" />,
      title: "Infrastructure fiable",
      description: "Hébergement sur des serveurs haute disponibilité",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-primaryBlue">Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how docManager can help you manage your documents efficiently.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primaryBlue text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Solutions;