// src/components/Footer.tsx
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-95 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6">L'Atelier</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3"><MapPin size={18} /> 12 Rue de la Coiffure, 75001 Paris</li>
            <li className="flex items-center gap-3"><Phone size={18} /> 01 23 45 67 89</li>
          </ul>
        </div>

        {/* Horaires */}
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Horaires</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li className="flex justify-between"><span>Mar - Ven</span> <span>09:00 - 19:00</span></li>
            <li className="flex justify-between font-bold text-black"><span>Samedi</span> <span>08:00 - 18:00</span></li>
            <li className="flex justify-between text-red-400"><span>Dim - Lun</span> <span>Fermé</span></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white shadow-sm rounded-full hover:text-amber-600 transition"><Instagram /></a>
            <a href="#" className="p-3 bg-white shadow-sm rounded-full hover:text-amber-600 transition"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm border-t pt-8">
        © {new Date().getFullYear()} L'Atelier Coiffure. Tous droits réservés.
      </div>
    </footer>
  );
}