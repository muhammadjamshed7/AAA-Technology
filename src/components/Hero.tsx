import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <span className="text-primary font-semibold tracking-wide uppercase">Leading Digital Agency</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Digital
            <span className="text-primary"> Presence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We craft exceptional digital experiences and drive growth through innovative solutions in web development, mobile apps, and digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}