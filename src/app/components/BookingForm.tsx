// src/components/BookingForm.tsx
"use client";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Calendar, User, Scissors, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  // Remplace "your_form_id" par l'ID fourni par Formspree
  const [state, handleSubmit] = useForm("your_form_id");

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center p-10 bg-white rounded-2xl shadow-lg"
      >
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-gray-800">C'est noté !</h3>
        <p className="text-gray-600">On vous recontacte très vite pour confirmer.</p>
      </motion.div>
    );
  }

  return (
    <section className="py-12 px-4 max-w-lg mx-auto">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Réserver une coupe</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NOM */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              id="full-name"
              name="name"
              type="text"
              placeholder="Votre nom complet"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
            />
          </div>

          {/* EMAIL */}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* SERVICE & DATE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Scissors className="absolute left-3 top-3 text-gray-400" size={20} />
              <select name="service" className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl appearance-none outline-none">
                <option>Coupe Classique</option>
                <option>Barbe & Soins</option>
                <option>Couleur / Balayage</option>
              </select>
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <input name="date" type="date" required className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl outline-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg active:scale-95"
          >
            {state.submitting ? "Envoi en cours..." : "Confirmer le rendez-vous"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}