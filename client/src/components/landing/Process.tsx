import { motion } from "framer-motion";
import processImg from "@assets/generated_images/secure_remote_connection_abstract_visualization.png";

const steps = [
  {
    number: "01",
    title: "יצירת קשר",
    description: "שולחים הודעה בוואטסאפ או משאירים פרטים בטופס למטה."
  },
  {
    number: "02",
    title: "חיבור מרחוק",
    description: "מתחברים באמצעות תוכנת שליטה מרחוק מאובטחת (AnyDesk / TeamViewer)."
  },
  {
    number: "03",
    title: "בדיקת המערכת",
    description: "אני בודק את המחשב ומוודא שאין תוכנות מתנגשות או בעיות אבטחה."
  },
  {
    number: "04",
    title: "התקנה והגדרות",
    description: "מתקין את רכיבי שע״מ, מגדיר את הכרטיס החכם ומוודא תקשורת."
  },
  {
    number: "05",
    title: "סיום ותשלום",
    description: "אתם נכנסים למערכת, מוודאים שהכל עובד, ורק אז מבצעים תשלום."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-slate-50" id="process">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                איך זה עובד בפועל?
                <br />
                <span className="text-blue-600">5 שלבים פשוטים</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                תהליך העבודה פשוט, שקוף ומהיר. אין צורך בידע טכני מוקדם מצדכם.
                אני מלווה אתכם מרגע הפנייה ועד שהמערכת עובדת אצלכם במחשב.
              </p>

              <div className="space-y-8 relative" role="region" aria-label="שלבי התהליך">
                {/* Connecting Line */}
                <div className="absolute top-4 bottom-4 right-[1.6rem] w-0.5 bg-blue-100 hidden md:block" aria-hidden="true"></div>

                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-6 relative"
                    role="article"
                  >
                    <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-white border-2 border-blue-100 rounded-full items-center justify-center z-10 font-bold text-blue-600 shadow-sm" aria-hidden="true">
                      {step.number}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-600">
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm" aria-label={`שלב ${step.number}`}>{step.number}</span>
                        <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 hidden md:block mb-2">{step.title}</h3>
                      <p className="text-slate-600 text-sm md:text-base">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <img 
                src={processImg} 
                alt="תמונת אילוסטרציה המציגה חיבור מאובטח מרחוק בין מחשבים עם סימני בטיחות" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px] hidden md:block"
              >
                <div className="text-sm font-bold text-slate-900 mb-1">חיבור מאובטח</div>
                <div className="text-xs text-slate-500">הצפנת נתונים מקצה לקצה בזמן החיבור</div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-blue-600 p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block"
              >
                <div className="text-sm font-bold text-white mb-1">100% הצלחה</div>
                <div className="text-xs text-blue-100">תשלום רק לאחר שהכל עובד תקין</div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
