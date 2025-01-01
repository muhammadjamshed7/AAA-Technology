import React from 'react';
import { Code, Smartphone, Megaphone, Gauge, Users, Trophy, ShoppingBag, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.'
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'Scalable online stores with seamless payment integration and optimization.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven strategies across search, social, and paid channels.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging digital experiences.'
  },
  {
    icon: Trophy,
    title: 'SEO Services',
    description: 'Technical optimization and content strategy to improve rankings.'
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Speed optimization and technical improvements for peak performance.'
  },
  {
    icon: Users,
    title: 'Strategy',
    description: 'Digital transformation and growth strategies for your business.'
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <span className="text-primary font-semibold tracking-wide uppercase">Our Services</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="text-primary">Offer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide end-to-end digital services tailored to your unique needs, combining strategy, innovation, and technology.
            Our goal is to help your business thrive in the modern, fast-paced digital age.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}