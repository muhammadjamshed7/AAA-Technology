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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end digital services to help your business thrive in the modern age
          </p>
        </div>
        
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
  );
}