import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    'Certified Professional Trainers',
    'Modern High-End Equipment',
    'Clean & Spacious Facilities',
    'Inclusive & Supportive Community',
    'Flexible Membership Options',
    'Results-Driven Programs',
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-100 rounded-3xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-zinc-100 rounded-full -z-0" />
            
            <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-display font-bold text-emerald-600">10+</p>
              <p className="text-sm font-medium text-zinc-600">Years of excellence in fitness coaching</p>
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">About Apex Fitness</span>
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
              More Than Just a Gym. <br />
              <span className="text-zinc-400">A Community for Growth.</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Founded in 2014, Apex Fitness was built on the belief that fitness should be accessible, effective, and inspiring. We've created a space where elite performance meets welcoming community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-zinc-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all hover:shadow-lg active:scale-95"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
