import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Custom B2B marketplace with advanced filtering and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Advanced product filtering',
      'Real-time inventory updates',
      'Customizable user interface',
      'Secure payment gateway integration',
    ],
  },
  {
    title: 'Healthcare Portal',
    category: 'Mobile App',
    description: 'HIPAA-compliant patient management system with telemedicine features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Secure patient data storage',
      'Telemedicine consultation feature',
      'User-friendly mobile interface',
      'Appointment scheduling system',
    ],
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Integrated marketing campaign that increased client ROI by 300%.',
    image: 'https://www.wsiworld.com/hubfs/2019/Digital-Marketing-Map-System.png',
    features: [
      'ROI-focused strategies',
      'Social media integration',
      'Data-driven campaign insights',
      'Cross-platform marketing tools',
    ],
  },
  {
    title: 'Financial Dashboard',
    category: 'Web Development',
    description: 'Real-time financial dashboard for tracking investments and market trends.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time data synchronization',
      'Customizable dashboards',
      'User-friendly analytics tools',
      'Market trend predictions',
    ],
  },
  {
    title: 'Fitness App',
    category: 'Mobile App',
    description: 'Personalized fitness app with workout plans and progress tracking.',
    image: 'https://plus.unsplash.com/premium_photo-1664910033852-f1639b57cd9b?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Personalized workout plans',
      'Activity tracking and goals',
      'Interactive user interface',
      'Nutritional guidance',
    ],
  },
  {
    title: 'Travel Booking System',
    category: 'Web Development',
    description: 'Comprehensive travel booking system with real-time availability and booking management.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time booking system',
      'Dynamic pricing engine',
      'Comprehensive travel options',
      'User account management',
    ],
  },
  {
    title: 'Restaurant Management System',
    category: 'Web Development',
    description: 'End-to-end restaurant management system with inventory and order management.',
    image: 'https://cdn.dribbble.com/userupload/9089332/file/original-0f288efd42599c346a8f54adf8cde8ff.png?resize=400x0',
    features: [
      'Order and table management',
      'Inventory tracking',
      'User-friendly interface',
      'Integration with POS systems',
    ],
  },
  {
    title: 'Education Platform',
    category: 'Web Development',
    description: 'Online education platform with courses, quizzes, and certification.',
    image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/666095d3dda47-top-features-to-look-for-in-learning-management-systems-054402379-16x9.jpeg?size=1200:675',
    features: [
      'Interactive course modules',
      'Automated quiz generation',
      'Certification system',
      'Student progress tracking',
    ],
  },
  {
    title: 'Real Estate App',
    category: 'Mobile App',
    description: 'Real estate app with property listings, virtual tours, and agent contact.',
    image: 'https://s3-alpha.figma.com/hub/file/1714607857/ea5e6357-892b-4e47-8031-63995652e16f-cover.png',
    features: [
      'Property listings with filters',
      'Virtual property tours',
      'Agent and client communication',
      'Real-time property updates',
    ],
  },
];


export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleCaseStudyClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22 md:py-20">
          <div className="text-center">
            <span className="text-primary text-2xl font-semibold tracking-wide uppercase">Our Work</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Projects We've <span className="text-primary">Delivered</span>
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
              <div
                key={index}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-primary font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 cursor-pointer">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                    onClick={() => handleCaseStudyClick(project)}
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-white flex items-center justify-center p-4 z-50">
          <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-6">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedProject.title}</h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <ul className="text-left text-gray-800 space-y-2">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-primary text-white px-4 py-2 cursor-pointer rounded-md hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
