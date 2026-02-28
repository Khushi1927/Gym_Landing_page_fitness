import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl mb-6">Get in Touch</h2>
            <p className="text-zinc-600 text-lg mb-10">
              Ready to start your journey? Have questions? Drop us a message or visit us in person. We're here to help.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-zinc-600">123 Fitness Ave, Muscle District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-zinc-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-zinc-600">hello@apexfitness.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden h-64 shadow-inner border border-zinc-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 md:p-12 rounded-[2rem] border border-zinc-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700 ml-1">Interested In</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Nutrition Coaching</option>
                  <option>General Membership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
