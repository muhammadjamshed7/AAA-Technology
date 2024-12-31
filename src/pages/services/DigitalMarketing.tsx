import React from 'react';
import { Target, TrendingUp, BarChart, Users } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';
import { MarketingMetrics } from '../../components/marketing/MarketingMetrics';
import { CaseStudyCard } from '../../components/marketing/CaseStudyCard';

const features = [
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description: 'Data-driven strategies to reach your ideal audience'
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Scalable solutions for sustainable business growth'
  },
  {
    icon: BarChart,
    title: 'Analytics & Insights',
    description: 'Advanced tracking and performance optimization'
  },
  {
    icon: Users,
    title: 'Social Media',
    description: 'Engaging content that builds brand awareness'
  }
];

const process = [
  {
    title: 'Research',
    description: 'In-depth market and competitor analysis'
  },
  {
    title: 'Strategy',
    description: 'Custom marketing plan development'
  },
  {
    title: 'Implementation',
    description: 'Campaign execution across channels'
  },
  {
    title: 'Optimization',
    description: 'Continuous monitoring and improvements'
  }
];

export default function DigitalMarketing() {
  return (
    <main className="bg-white">
      <ServiceHero 
        title="Digital Marketing"
        subtitle="Data-Driven Digital Marketing Solutions"
        description="Transform your online presence with our comprehensive digital marketing strategies that deliver measurable results."
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

      <MarketingMetrics />
      <ProcessTimeline steps={process} />
      <CaseStudyCard />
      <ContactCTA />
    </main>
  );
}