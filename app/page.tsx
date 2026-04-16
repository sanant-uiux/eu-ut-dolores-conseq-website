"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";

const services = ["Odio tempora dolor e"];
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <div>
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-8" style={{ color: "#6366f1" }}>
                <Sparkles className="w-4 h-4" /> Similique ducimus s
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
              Eu ut dolores <span className="gradient-text">conseq</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Quam consequuntur im
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 text-white" style={{ background: "#6366f1" }}>
                Get Started <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl text-base font-semibold hover:bg-white/5 transition-all">Learn More</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#050507" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#6366f1" }}>What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Voluptatem irure re</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service: string, i: number) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 hover:glow transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-lg font-bold" style={{ background: "#6366f115", color: "#6366f1" }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold mb-3">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#030305" }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get <span className="gradient-text">Started</span>?</h2>
            <p className="text-gray-400 text-lg mb-10">Voluptatem irure re</p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 text-white" style={{ background: "#6366f1" }}>
              Contact Us <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free Consultation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Quick Response</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}