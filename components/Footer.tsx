"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6" style={{ background: "#030305" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-3" style={{ color: "#6366f1" }}>Eu ut dolores conseq</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Quam consequuntur im</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Pages</h4>
          <div className="space-y-2">
            <Link href="/" className="block text-gray-500 text-sm hover:text-white">Home</Link>
            <Link href="/about" className="block text-gray-500 text-sm hover:text-white">About</Link>
            <Link href="/contact" className="block text-gray-500 text-sm hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Services</h4>
          <div className="space-y-2 text-sm text-gray-500">
            <p>Odio tempora dolor e</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
          <div className="space-y-2 text-sm text-gray-500">
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" style={{ color: "#6366f1" }} /> tiluhyw@mailinator.com</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" style={{ color: "#6366f1" }} /> Ea laborum magna cil</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: "#6366f1" }} /> Qui aut itaque sunt </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Eu ut dolores conseq. All rights reserved.</p>
      </div>
    </footer>
  );
}