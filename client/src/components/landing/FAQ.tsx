import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "כמה זמן לוקחת ההתקנה?",
    answer: "ברוב המקרים ההתקנה לוקחת כ-30 דקות. במקרים מורכבים יותר זה עשוי לקחת מעט יותר זמן, אך אני לא עוזב עד שהכל עובד."
  },
  {
    question: "האם החיבור למחשב שלי מאובטח?",
    answer: "בהחלט. אנו משתמשים בתוכנות מוכרות ומאובטחות (כמו AnyDesk או TeamViewer). החיבור הוא חד-פעמי, מוצפן, ואתם רואים כל פעולה שאני עושה על המסך בזמן אמת. בסיום ההתקנה, החיבור מתנתק."
  },
  {
    question: "מתי מתבצע התשלום?",
    answer: "התשלום מתבצע רק לאחר שההתקנה הסתיימה בהצלחה והמערכת עובדת לשביעות רצונכם. אין תשלום מראש."
  },
  {
    question: "מה קורה אם יש תקלה אחרי שבוע?",
    answer: "אני מספק אחריות על ההתקנה. אם יש בעיה שקשורה להתקנה שביצעתי, אני אטפל בה ללא עלות נוספת."
  },
  {
    question: "האם זה עובד על ווינדוס 11?",
    answer: "כן, ההתקנה מותאמת לכל גרסאות ווינדוס (10 ו-11) ולכל הדפדפנים המודרניים."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">שאלות נפוצות</h2>
        
        <Accordion 
          type="single" 
          collapsible 
          className="w-full space-y-4"
          role="region"
          aria-label="שאלות נפוצות ותשובות"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-slate-200 rounded-lg px-4 data-[state=open]:bg-slate-50 data-[state=open]:border-blue-200 transition-colors focus-within:ring-2 focus-within:ring-blue-600"
            >
              <AccordionTrigger 
                className="text-lg font-medium text-slate-800 hover:text-blue-600 hover:no-underline py-4 text-right focus:ring-2 focus:ring-blue-600 rounded"
                aria-label={`שאלה ${index + 1}: ${faq.question}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4 text-right">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
