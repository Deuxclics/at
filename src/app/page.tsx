// src/app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { Scissors, Star, Clock, ShieldCheck } from "lucide-react";

// SEO Metad  ata
export const metadata = {
  title: "L'Atelier Coiffure | Coiffeur Créateur & Visagiste",
  description: "Prenez rendez-vous en ligne chez L'Atelier Coiffure. Expertise en coupe, coloration et barbe. Style moderne et soins premium.",
  keywords: ["coiffeur", "réservation en ligne", "coupe homme", "coupe femme", "barbier", "visagiste"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section Services - Crucial pour le SEO et l'info client */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Nos Prestations</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Coupe & Coiffage" 
              price="À partir de 35€" 
              desc="Shampoing relaxant, coupe personnalisée et brushing."
              icon={<Scissors className="text-amber-600" />}
            />
            <ServiceCard 
              title="Barbier Expert" 
              price="À partir de 25€" 
              desc="Taille de barbe traditionnelle au coupe-chou et serviette chaude."
              icon={<Star className="text-amber-600" />}
            />
            <ServiceCard 
              title="Coloration" 
              price="Sur devis" 
              desc="Balayage, ombré hair et colorations végétales haut de gamme."
              icon={<ShieldCheck className="text-amber-600" />}
            />
          </div>
        </div>
      </section>

      {/* Section Réservation */}
      <section id="booking" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Prêt pour votre transformation ?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Choisissez votre créneau et nous nous occupons du reste. 
              Vous recevrez une confirmation par email sous peu.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600"><Clock size={24} /></div>
                <p className="font-medium text-gray-800">RDV confirmé en moins de 2h</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600"><Star size={24} /></div>
                <p className="font-medium text-gray-800">Note moyenne de 4.9/5 par nos clients</p>
              </div>
            </div>
          </div>

          {/* Le formulaire avec Formspree */}
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

// Petit composant interne pour les cartes de services
function ServiceCard({ title, price, desc, icon }: { title: string, price: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-amber-700 font-bold mb-3">{price}</p>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}