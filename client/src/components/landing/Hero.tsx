import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, CreditCard, ArrowLeft } from "lucide-react";
import heroBg from "@assets/generated_images/clean_modern_office_desk_with_computer,_blurred_background.png";
import { CONTACT_CONFIG } from "@/lib/config";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-700 font-medium text-sm md:text-base shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>התקנה מאובטחת ומקצועית מרחוק</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            התקנת <span className="text-blue-600">שע״מ</span> מרחוק
            <br />
            פתרון מהיר לרואי חשבון
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed"
          >
            תוך <span className="font-bold text-slate-900">{CONTACT_CONFIG.duration}</span> המערכת אצלכם.
            <br className="hidden md:block" />
            חיבור מאובטח, שירות מקצועי, ותשלום רק לאחר הצלחה.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              אני רוצה להתקין עכשיו
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto border-slate-300 hover:bg-slate-50 text-slate-700"
              onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
            >
              איך זה עובד?
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-slate-500 text-sm md:text-base font-medium"
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>התקנה מהירה תוך 30 דק׳</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span>חיבור מאובטח ומוצפן</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-500" />
              <span>תשלום לאחר התקנה בלבד</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
