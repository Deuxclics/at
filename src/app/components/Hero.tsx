// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-700 text-sm font-bold mb-6"
        >
          OUVERT DU MARDI AU SAMEDI
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8"
        >
          Révélez votre style, <br /> 
          <span className="italic text-amber-600">sublimez</span> votre éclat.
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Plus qu'une simple coupe, une expérience de soin personnalisée dans un cadre relaxant au cœur de la ville.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#booking" className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            Réserver mon créneau
          </a>
          <a href="#services" className="border border-gray-200 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition">
            Voir nos tarifs
          </a>
        </motion.div>
      </div>
    </section>
  );
}