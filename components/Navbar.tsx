"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold" style={{ color: "#6366f1" }}>Eu ut dolores conseq</Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (<Link key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.name}</Link>))}
          <Link href="/contact" className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all hover:shadow-lg" style={{ background: "#6366f1" }}>Get in Touch</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>
      <AnimatePresence>{open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass border-t border-white/5">
          <div className="px-6 py-4 space-y-3">
            {links.map((l) => (<Link key={l.href} href={l.href} className="block text-gray-300 hover:text-white py-2" onClick={() => setOpen(false)}>{l.name}</Link>))}
          </div>
        </motion.div>
      )}</AnimatePresence>
    </motion.nav>
  );
}