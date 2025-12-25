import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-blue-100 hover:text-white mb-4 focus:ring-2 focus:ring-white focus:outline-none focus:rounded">
            <ArrowLeft className="w-5 h-5" />
            חזרה לעמוד הבית
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">הצהרת נגישות</h1>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">הצהרת נגישות</h2>
          <p className="text-slate-700 mb-4">
            אתר זה של שירותי התקנת שע״מ מרחוק מותאם להנגישות וצפוי לעמוד בתקן WCAG 2.1 ברמה AA ובהתאם לתקן הישראלי 5568 לנגישות.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">תכונות הנגישות באתר</h2>
          <ul className="space-y-3 text-slate-700 list-disc list-inside">
            <li><strong>HTML סמנטי:</strong> השימוש בתגים סמנטיים כמו header, nav, main, section, article ו-footer לשיפור הבנת מבנה הדף</li>
            <li><strong>טקסט חלופי:</strong> כל התמונות באתר מכילות טקסט חלופי (alt text) המתאר את תוכנם בשפה הברורה</li>
            <li><strong>ניגודיות צבעים:</strong> כל הטקסט וגרפיקה האתר עומדים בדרישות ניגודיות WCAG AA ברמה של 4.5:1 לטקסט רגיל</li>
            <li><strong>שימוש במקלדת:</strong> כל התכונות באתר נגישות בעזרת מקלדת בלבד, ללא צורך בעכבר</li>
            <li><strong>Focus Indicators:</strong> כל הרכיבים האינטראקטיביים מציגים אינדיקטור focus ברור וגלוי</li>
            <li><strong>כותרות היררכיות:</strong> השימוש הנכון בכותרות (H1, H2, H3) ליצירת מבנה לוגי של הדף</li>
            <li><strong>דלג לתוכן:</strong> קישור "דלג לתוכן הראשי" בתחילת הדף כדי דילוג על ניווט חוזר</li>
            <li><strong>ARIA:</strong> שימוש בתכונות ARIA כדי להגביר את הנגישות של רכיבים מורכבים</li>
            <li><strong>סקרים וטפסים:</strong> טפסים מכילים תוויות (labels) ברורות, הודעות שגיאה נגישות, וחיווי חזותי ברור</li>
            <li><strong>אנימציות:</strong> מתן כבוד להעדפת ההפחתה של תנועה (prefers-reduced-motion)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">תקנים ותקציבים</h2>
          <p className="text-slate-700 mb-4">
            אתר זה מכיל את הדרישות של:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li><strong>WCAG 2.1:</strong> Web Content Accessibility Guidelines ברמה AA</li>
            <li><strong>תקן ישראלי 5568:</strong> דרישות נגישות לתכנים בוועב לאנשים עם מוגבלויות</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">דפדפנים וטכנולוגיות מסיעות</h2>
          <p className="text-slate-700 mb-4">
            האתר נבדק וצפוי לעבוד כראוי עם:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li>קוראי מסך (Screen readers) - NVDA, JAWS, VoiceOver</li>
            <li>כלים להגדלת גופן</li>
            <li>זום בדפדפן</li>
            <li>ניווט באמצעות מקלדת בלבד</li>
            <li>דפדפנים מודרניים (Chrome, Firefox, Safari, Edge)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">תוכן דינמי וחידושים</h2>
          <p className="text-slate-700">
            כל חידוש דינמי של תוכן מתבצע בדרך נגישה, עם הודעות ARIA live לקוראי מסך כדי ליידע משתמשים על שינויים בעמוד.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">דיווח על בעיות נגישות</h2>
          <p className="text-slate-700 mb-4">
            אם אתה מתמודד עם בעיות נגישות באתר זה, אנא צור קשר:
          </p>
          <p className="text-slate-700">
            <strong>דרך וואטסאפ:</strong> 0535907352 או דרך הטופס בעמוד הבית<br />
            אנא ספר לנו על הבעיה הנתקלת בה והדפדפן או קורא המסך שבו משתמש.
          </p>
        </section>

        <section className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">מחויבות שלנו</h2>
          <p className="text-slate-700">
            אנחנו מחויבים לשיפור מתמיד של נגישות האתר. אנו בודקים בקביעות את נגישות האתר, ותופסים כל בעיה כדי לתקן אותה במהירות האפשרית.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-slate-200 text-slate-600 text-sm text-center">
          <p>עדכון אחרון: דצמבר 2025</p>
        </footer>

      </article>
    </main>
  );
}
