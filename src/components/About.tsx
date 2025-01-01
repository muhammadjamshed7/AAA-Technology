import { Briefcase, Users, Globe, Award } from "lucide-react";
import ContactCTA from "./ContactCTA";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

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

export default function About() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <span className="text-primary font-semibold tracking-wide uppercase">About Us</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AAA <span className="text-primary">Digital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AAA Digital is a top software consultancy and digital marketing company with a skilled team across diverse domains, delivering innovative solutions to help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">Services</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-primary">Mission</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
            "Our mission is to deliver innovative, client-centric solutions that fuel business growth. We are committed to providing exceptional value, ensuring that our clients achieve long-term success in the ever-evolving digital landscape."
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}