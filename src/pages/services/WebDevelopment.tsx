import ServiceHero from "./../../components/ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
// import TechStack from "../../components/TechStack";
// import ProjectShowcase from "../../components/ProjectShowcase"; 
import ContactCTA from "../../components/ContactCTA";
import { Code, Layers, Shield, Zap } from "lucide-react";


const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored solutions built with modern frameworks like React, Vue, and Node.js'
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Future-proof applications designed to grow with your business'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Lightning-fast load times and smooth user experiences'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee'
  }
];

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your business goals and technical requirements'
  },
  {
    title: 'Planning',
    description: 'Creating detailed specifications and project roadmap'
  },
  {
    title: 'Development',
    description: 'Building your solution using agile methodology'
  },
  {
    title: 'Testing',
    description: 'Rigorous quality assurance and performance testing'
  },
  {
    title: 'Launch',
    description: 'Seamless deployment and ongoing support'
  }
];

// const projects = [
//   {
//     title: 'E-Commerce Platform',
//     description: 'Custom B2B marketplace with advanced filtering and real-time inventory',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
//     technologies: ['React', 'Node.js', 'MongoDB']
//   },
//   {
//     title: 'Healthcare Portal',
//     description: 'HIPAA-compliant patient management system with telemedicine features',
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
//     technologies: ['Vue.js', 'Python', 'PostgreSQL']
//   }
// ];

export default function WebDevelopment() {
  return (
    <main>
      <ServiceHero 
        title="Web Development"
        subtitle="Custom Web Applications Built for Growth"
        description="We create scalable, secure, and high-performance web applications that drive business success."
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />
      {/* <TechStack />  */}
      {/* <ProjectShowcase projects={projects} /> */}
      <ContactCTA />
    </main>
  );
}