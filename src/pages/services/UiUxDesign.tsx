import React from 'react';
import { Palette, Layout, Users, Eye } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';

const features = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Beautiful, intuitive interfaces that users love'
  },
  {
    icon: Users,
    title: 'UX Research',
    description: 'Data-driven insights into user behavior'
  },
  {
    icon: Layout,
    title: 'Wireframing',
    description: 'Detailed blueprints for perfect user flows'
  },
  {
    icon: Eye,
    title: 'Visual Design',
    description: 'Stunning visuals that match your brand'
  }
];

const process = [
  {
    title: 'Research',
    description: 'Understanding user needs and behaviors'
  },
  {
    title: 'Wireframes',
    description: 'Creating the structural design'
  },
  {
    title: 'Visual Design',
    description: 'Adding colors, typography, and style'
  },
  {
    title: 'Testing',
    description: 'Validating designs with real users'
  },
  {
    title: 'Implementation',
    description: 'Bringing designs to life'
  }
];

export default function UiUxDesign() {
  return (
    <main className="bg-white">
      <ServiceHero 
        title="UI/UX Design"
        subtitle="Design That Delights Users"
        description="Create intuitive, engaging experiences that keep users coming back."
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
      <ContactCTA />
    </main>
  );
}