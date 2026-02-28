import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:via-white/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              Premium Fitness Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-zinc-900">
              Transform Your <span className="text-emerald-600">Body</span>, Elevate Your Life.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-lg">
              Experience the next level of fitness with world-class equipment, expert trainers, and a community that pushes you further.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all hover:shadow-xl active:scale-95 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-zinc-900 hover:bg-zinc-100 transition-colors">
                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current text-emerald-600 ml-1" />
                </div>
                Watch Video
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-zinc-900">Join 500+ members</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                  <span className="text-zinc-500 text-xs ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
