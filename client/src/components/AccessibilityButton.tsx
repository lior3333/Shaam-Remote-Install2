import { Link } from "wouter";
import { Eye } from "lucide-react";

export default function AccessibilityButton() {
  return (
    <Link href="/accessibility">
      <a 
        className="fixed bottom-6 left-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center group"
        title="כפתור נגישות - לחץ כדי לעבור לעמוד הצהרת הנגישות"
        aria-label="כפתור נגישות - עמוד הצהרת נגישות WCAG 2.1 AA"
      >
        <Eye className="w-6 h-6" />
        <span className="sr-only">עמוד הצהרת הנגישות</span>
      </a>
    </Link>
  );
}
