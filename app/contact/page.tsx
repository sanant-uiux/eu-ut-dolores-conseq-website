"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <section className="hero-gradient pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "#6366f1" }}>Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In <span className="gradient-text">Touch</span></h1>
            <p className="text-xl text-gray-400">We would love to hear from you. Reach out and let us know how we can help.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-6 border-y border-white/5" style={{ background: "#050507" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center">
            <Mail className="w-5 h-5 mx-auto mb-3" style={{ color: "#6366f1" }} />
            <p className="font-semibold text-sm">tiluhyw@mailinator.com</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <Phone className="w-5 h-5 mx-auto mb-3" style={{ color: "#6366f1" }} />
            <p className="font-semibold text-sm">Ea laborum magna cil</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <MapPin className="w-5 h-5 mx-auto mb-3" style={{ color: "#6366f1" }} />
            <p className="font-semibold text-sm">Qui aut itaque sunt </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-6" style={{ background: "#050507" }}>
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl p-12 text-center glow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#10b98115" }}>
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. We will get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm text-gray-400 mb-1.5">Name *</label><input required className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm" placeholder="Your name" /></div>
                <div><label className="block text-sm text-gray-400 mb-1.5">Email *</label><input required type="email" className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm" placeholder="you@email.com" /></div>
              </div>
              <div><label className="block text-sm text-gray-400 mb-1.5">Subject</label><input className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm" placeholder="What is this about?" /></div>
              <div><label className="block text-sm text-gray-400 mb-1.5">Message *</label><textarea required rows={6} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm resize-none" placeholder="Tell us more..." /></div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl text-white" style={{ background: "#6366f1" }}>Send Message <Send className="w-4 h-4" /></button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}