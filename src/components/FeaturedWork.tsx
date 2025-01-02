import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link,useNavigate } from 'react-router-dom';


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
  }
];

export default function FeaturedWork() {
  const navigate = useNavigate();
  const handleCaseStudyClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span  className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses achieve their digital goals
          </p>
        </div>
        
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
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          
            <Button variant="primary" size="lg" className="group"
            onClick={() => handleCaseStudyClick('/work')}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>
    </section>
  );
}