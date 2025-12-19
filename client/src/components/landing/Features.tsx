import { motion } from "framer-motion";
import { CheckCircle2, Server, Globe, Laptop, ShieldCheck, UserCheck } from "lucide-react";

const features = [
  {
    title: "חיבור ישיר ומאובטח",
    description: "התקנת רכיב שע״מ בצורה מאובטחת המאפשרת עבודה שוטפת מול רשויות המס.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "גישה לרשת במקביל",
    description: "הגדרת המערכת כך שתוכלו להמשיך לגלוש באינטרנט הרגיל במקביל לעבודה בשע״מ.",
    icon: <Globe className="w-6 h-6 text-blue-600" />
  },
  {
    title: "תמיכה בכל הדפדפנים",
    description: "התאמת המערכת לעבודה תקינה עם כרום, אדג׳ ודפדפנים מודרניים נוספים.",
    icon: <Laptop className="w-6 h-6 text-blue-600" />
  },
  {
    title: "ללא התעסקות טכנית",
    description: "אני דואג לכל ההגדרות, הדרייברים והקינפוגים. אתם מקבלים מערכת עובדת.",
    icon: <Server className="w-6 h-6 text-blue-600" />
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            מה זה שע״מ ולמה זה חשוב?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            שירות עיבודים ממוכנים (שע״מ) הוא השער שלכם למערכות המידע של רשות המסים.
            התקנה נכונה קריטית לעבודה חלקה, ללא ניתוקים וללא בעיות אבטחה.
            רוב התקלות נובעות מהתקנה חובבנית שחוסמת גישה לאינטרנט או יוצרת התנגשויות.
          </p>
        </div>

        {/* What I Offer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">למי השירות מתאים?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-50">רואי חשבון ויועצי מס הזקוקים לגישה מיידית</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-50">משרדים שנתקלו בבעיות חיבור או איטיות</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-50">מי שרוצה ראש שקט ופתרון טכני מלא</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                        <UserCheck className="w-10 h-10 text-blue-200" />
                        <div>
                            <div className="font-bold text-lg">שירות אישי</div>
                            <div className="text-blue-200 text-sm">זמין בוואטסאפ לכל שאלה</div>
                        </div>
                    </div>
                     <p className="text-blue-100 text-sm">
                        אני מבין את הדחיפות בעבודה שלכם. השירות שלי בנוי כדי לחסוך לכם זמן יקר ולאפשר לכם לחזור לעבוד כמה שיותר מהר.
                     </p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
