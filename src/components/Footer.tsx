import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-xl">
                <Dumbbell className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">APEX FITNESS</span>
            </a>
            <p className="text-zinc-500 leading-relaxed">
              Empowering individuals to reach their peak physical and mental potential through elite training and community support.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 hover:text-emerald-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Personal Training', 'Group Classes', 'Nutrition Plans', 'Recovery Suite', '24/7 Access'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-zinc-500 hover:text-emerald-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-zinc-500 mb-6">Subscribe to get fitness tips and special offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
              />
              <button className="bg-zinc-900 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© {currentYear} Apex Fitness. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
