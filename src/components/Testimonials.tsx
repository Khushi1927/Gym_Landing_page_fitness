import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Member for 2 years',
    content: "The trainers here are incredible. They don't just show you how to use machines; they teach you how to move properly and reach your goals safely.",
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Member for 6 months',
    content: "Best gym in the city, hands down. The equipment is always clean, and the community is so supportive. I've seen more progress here than anywhere else.",
    image: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Emma Williams',
    role: 'Member for 1 year',
    content: "I love the group classes! They're challenging but fun, and the instructors are so motivating. It's the highlight of my day.",
    image: 'https://i.pravatar.cc/150?u=emma',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl mb-6">What Our Members Say</h2>
            <p className="text-zinc-400 text-lg">
              Don't just take our word for it. Hear from the people who have transformed their lives at Apex Fitness.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-800 p-4 rounded-2xl">
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Google Rating</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-2xl">
              <p className="text-2xl font-bold">1k+</p>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 relative group hover:bg-zinc-800 transition-colors"
            >
              <Quote className="absolute top-6 right-8 text-emerald-500/20 w-12 h-12 group-hover:text-emerald-500/40 transition-colors" />
              <p className="text-zinc-300 mb-8 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
