import { ArrowRight, Briefcase, Users, Globe, Award } from 'lucide-react';
import { Button } from './ui/Button';
// import ContactCTA from "./ContactCTA";
import { Link } from 'react-router-dom';

const expertise = [
  {
    icon: Briefcase,
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your business needs.'
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Expand your team with our skilled IT professionals.'
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'Delivering projects across the globe with excellence.'
  },
  {
    icon: Award,
    title: 'Award-Winning Solutions',
    description: 'Recognized for our innovative and impactful solutions.'
  }
];

export default function Hero() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <span className="text-primary text-2xl font-bold tracking-wide uppercase">Leading Digital Agency</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 my-6">
              Transform Your 
              <span className="text-primary"> Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We craft exceptional digital experiences and drive growth through innovative solutions in web development, mobile apps, and digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact">
             <Button variant="primary" size="lg" className="group">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
             </Link>
              <Link to="/work">
              <Button 
              
              variant="outline" size="lg">
                View Our Work
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-primary">Expertise</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300">
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="text-primary">Mission</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
            "Our mission is to deliver innovative, client-centric solutions that fuel business growth. We are committed to providing exceptional value, ensuring that our clients achieve long-term success in the ever-evolving digital landscape."
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}