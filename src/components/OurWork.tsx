import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Custom B2B marketplace with advanced filtering and real-time inventory management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Healthcare Portal',
    category: 'Mobile App',
    description: 'HIPAA-compliant patient management system with telemedicine features',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Integrated marketing campaign that increased client ROI by 300%',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Financial Dashboard',
    category: 'Web Development',
    description: 'Real-time financial dashboard for tracking investments and market trends',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Fitness App',
    category: 'Mobile App',
    description: 'Personalized fitness app with workout plans and progress tracking',
    image: 'https://images.unsplash.com/photo-1571019613914-85f342c1d1e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Travel Booking System',
    category: 'Web Development',
    description: 'Comprehensive travel booking system with real-time availability and booking management',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Restaurant Management System',
    category: 'Web Development',
    description: 'End-to-end restaurant management system with inventory and order management',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c67b5d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Education Platform',
    category: 'Web Development',
    description: 'Online education platform with courses, quizzes, and certification',
    image: 'https://images.unsplash.com/photo-1584697964403-6c7d4a9a6f4b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Real Estate App',
    category: 'Mobile App',
    description: 'Real estate app with property listings, virtual tours, and agent contact',
    image: 'https://images.unsplash.com/photo-1560185127-6a8c2c6e8b8b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function OurWork() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <span className="text-primary font-semibold tracking-wide uppercase">Our Work</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Projects We've Delivered
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore some of our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-primary font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="group">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}