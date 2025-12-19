import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Process from "@/components/landing/Process";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import StickyCTA from "@/components/landing/StickyCTA";
import { CONTACT_CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header / Nav */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center container mx-auto">
        <div className="font-heading font-bold text-2xl text-slate-900">
          שע״מ<span className="text-blue-600">פיקס</span>
        </div>
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">יתרונות</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">איך זה עובד</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">צור קשר</a>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                {CONTACT_CONFIG.phone}
            </span>
        </div>
      </header>

      <Hero />
      <Features />
      <Process />
      <FAQ />
      <Contact />
      <StickyCTA />
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} {CONTACT_CONFIG.role} - כל הזכויות שמורות.</p>
        </div>
      </footer>
    </main>
  );
}
