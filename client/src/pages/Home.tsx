import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Process from "@/components/landing/Process";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import StickyCTA from "@/components/landing/StickyCTA";
import AccessibilityButton from "@/components/AccessibilityButton";
import { CONTACT_CONFIG } from "@/lib/config";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only fixed top-0 start-0 z-50 bg-blue-600 text-white font-bold text-lg p-4 rounded-b">
        דלג לתוכן הראשי
      </a>
      
      <main className="min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900" id="main">
        
        {/* Header / Nav */}
        <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center container mx-auto" role="banner">
          <div className="font-heading font-bold text-2xl text-slate-900">
            שע״מ<span className="text-blue-600">פיקס</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 font-medium text-slate-600" aria-label="ניווט ראשי">
            <a href="#features" className="hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none focus:rounded px-2 py-1">יתרונות</a>
            <a href="#process" className="hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none focus:rounded px-2 py-1">איך זה עובד</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none focus:rounded px-2 py-1">צור קשר</a>
            <Link href="/accessibility" className="text-blue-700 hover:text-blue-900 font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none focus:rounded px-2 py-1">נגישות</Link>
          </nav>
        </header>

        <Hero />
        <Features />
        <Process />
        <FAQ />
        <Contact />
        <StickyCTA />
        <AccessibilityButton />
        
        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 text-center text-sm" role="contentinfo">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} {CONTACT_CONFIG.role} - כל הזכויות שמורות</p>
            <nav className="mt-4 flex gap-4 justify-center" aria-label="קישורי תחתונים">
              <Link href="/accessibility" className="hover:text-slate-200 focus:ring-2 focus:ring-blue-400 focus:outline-none focus:rounded px-2 py-1">הצהרת נגישות</Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
