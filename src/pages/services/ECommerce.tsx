import React from 'react';
import { ShoppingBag, Shield, Zap, BarChart } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';

const features = [
  {
    icon: ShoppingBag,
    title: 'Custom E-Commerce Solutions',
    description: 'Tailored online stores built with modern platforms like Shopify and WooCommerce'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'PCI-compliant payment processing with multiple gateway options'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Fast-loading stores with excellent user experience'
  },
  {
    icon: BarChart,
    title: 'Analytics & Insights',
    description: 'Detailed reporting and sales analytics'
  }
];

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your business needs and goals'
  },
  {
    title: 'Design',
    description: 'Creating user-friendly store layouts'
  },
  {
    title: 'Development',
    description: 'Building your custom e-commerce solution'
  },
  {
    title: 'Testing',
    description: 'Ensuring everything works perfectly'
  },
  {
    title: 'Launch',
    description: 'Going live with your new online store'
  }
];

export default function ECommerce() {
  return (
    <main className="bg-white">
      <ServiceHero 
        title="E-Commerce Solutions"
        subtitle="Build Your Online Store"
        description="Create a powerful online shopping experience that drives sales and delights customers."
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