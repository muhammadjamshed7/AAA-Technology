import React from 'react';
import { Smartphone, Cloud, Shield, Zap } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';

const features = [
  {
    icon: Smartphone,
    title: 'Native Development',
    description: 'High-performance native apps for iOS and Android platforms'
  },
  {
    icon: Cloud,
    title: 'Cross-Platform',
    description: 'Build once, deploy everywhere with React Native and Flutter'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with offline capabilities'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized for speed and smooth user experience'
  }
];

const process = [
  {
    title: 'Strategy',
    description: 'Define your app goals and target audience'
  },
  {
    title: 'Design',
    description: 'Create intuitive UI/UX following platform guidelines'
  },
  {
    title: 'Development',
    description: 'Build your app using modern frameworks and best practices'
  },
  {
    title: 'Testing',
    description: 'Rigorous testing across devices and platforms'
  },
  {
    title: 'Launch',
    description: 'App store optimization and deployment'
  }
];

export default function MobileApps() {
  return (
    <main className="bg-white">
      <ServiceHero 
        title="Mobile App Development"
        subtitle="Native & Cross-Platform Mobile Solutions"
        description="Create powerful, engaging mobile experiences that users love. Our expert team builds scalable apps for iOS and Android platforms."
      />
      
      <section className="py-20">
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
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Technology Stack</h2>
            <p className="mt-4 text-xl text-gray-600">We use the latest technologies to build robust mobile applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['iOS (Swift)', 'Android (Kotlin)', 'React Native', 'Flutter'].map((tech, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-lg shadow-sm">
                <p className="font-semibold text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}