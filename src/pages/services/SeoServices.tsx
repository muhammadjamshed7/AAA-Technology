import React from 'react';
import { Search, TrendingUp, Globe, FileText } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';

const features = [
  {
    icon: Search,
    title: 'Technical SEO',
    description: 'Optimize your website structure and performance'
  },
  {
    icon: TrendingUp,
    title: 'Keyword Research',
    description: 'Target the right search terms for your business'
  },
  {
    icon: Globe,
    title: 'Local SEO',
    description: 'Dominate local search results'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Create content that ranks and converts'
  }
];

const process = [
  {
    title: 'Audit',
    description: 'Comprehensive website analysis'
  },
  {
    title: 'Strategy',
    description: 'Custom SEO plan development'
  },
  {
    title: 'Implementation',
    description: 'Executing optimization tactics'
  },
  {
    title: 'Monitoring',
    description: 'Tracking rankings and traffic'
  }
];

export default function SeoServices() {
  return (
    <main className="bg-white">
      <ServiceHero 
        title="SEO Services"
        subtitle="Boost Your Search Rankings"
        description="Drive organic traffic and increase visibility with our proven SEO strategies."
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