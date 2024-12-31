import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export default function ContactCTA() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help your business grow with our innovative digital solutions.
        </p>
        <Button 
          variant="secondary"
          size="lg"
          className="group bg-white text-primary hover:bg-gray-100"
        >
          Get Your Free Consultation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}