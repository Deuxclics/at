// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight">
          <Scissors className="text-amber-600" />
          <span>L'ATELIER</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#services" className="hover:text-black transition">Services</a>
          <a href="#about" className="hover:text-black transition">Le Salon</a>
          <a href="#booking" className="bg-black text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
            Prendre RDV
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed" animate="open" exit="closed" variants={menuVariants}
            className="absolute top-20 left-0 w-full bg-white border-b shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Le Salon</a>
            <a href="#booking" className="bg-black text-white p-3 rounded-xl text-center" onClick={() => setIsOpen(false)}>
              Réserver maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}