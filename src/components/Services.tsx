import React from 'react';
import { motion } from 'motion/react';
import { Zap, Users, Target, Heart, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Personal Training',
    description: 'One-on-one sessions with expert trainers tailored to your specific goals and fitness level.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Energetic group workouts ranging from HIIT and Yoga to Spin and Strength training.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Target,
    title: 'Nutrition Plans',
    description: 'Customized meal plans and nutritional guidance to fuel your body and maximize results.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Heart,
    title: 'Cardio Zone',
    description: 'State-of-the-art cardiovascular equipment with integrated entertainment systems.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Shield,
    title: 'Recovery Suite',
    description: 'Access to saunas, steam rooms, and massage therapy to help your body recover faster.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your own schedule with secure, round-the-clock access to our facilities.',
    color: 'bg-zinc-50 text-zinc-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">Our Premium Services</h2>
          <p className="text-zinc-600 text-lg">
            We provide everything you need to reach your peak performance. From elite equipment to expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
