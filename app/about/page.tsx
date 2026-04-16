"use client";
import { motion } from "framer-motion";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function AboutPage() {
  return (
    <div>
      <section className="hero-gradient pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "#6366f1" }}>About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="gradient-text">Eu ut dolores conseq</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">Quam consequuntur im</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6" style={{ background: "#050507" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-gray-400 leading-relaxed text-lg">Voluptatem irure re</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6 border-y border-white/5" style={{ background: "#030305" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#6366f1" }}>Our Audience</p>
            <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
            <p className="text-gray-400 text-lg">Et nisi vel placeat</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}