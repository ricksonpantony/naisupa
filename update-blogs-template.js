#!/usr/bin/env node
/**
 * Template for Blog Post 31 Design System
 * This file contains the exact components and styling from BlogPost31
 * Use this as a reference when updating blogs 17-30
 */

const SUBCOMPONENTS = `
/* Subcomponents */

const MetaPill = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-nai-teal/20">
    {icon}
    <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{label}</span>
  </div>
)

const Stat = ({ value, label }) => (
  <div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-nai-teal mb-1">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
)

const SuccessStat = ({ value, label }) => (
  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 text-white drop-shadow-lg">{value}</div>
    <div className="text-white/95 text-xs sm:text-sm md:text-base font-semibold">{label}</div>
  </div>
)

const Card = ({ className = "", children }) => (
  <div className={\`rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 \${className}\`}>
    {children}
  </div>
)

const Section = ({ title, children }) => (
  <section className="scroll-mt-28">
    {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
    {children}
  </section>
)

const QuestionCard = ({ question, answer }) => (
  <Card className="p-6 border-l-4 border-nai-teal">
    <h4 className="text-lg font-bold text-nai-teal mb-3">{question}</h4>
    <p className="text-gray-700 leading-relaxed">{answer}</p>
  </Card>
)
`;

console.log("Blog Design System Template");
console.log("===========================");
console.log("\nKey Updates Needed:");
console.log("1. Header: bg-gradient-to-br from-white via-nai-soft/30 to-blue-50");
console.log("2. Breadcrumb: Use → arrows, text-nai-teal for separators");
console.log("3. Category Badge: bg-nai-teal (solid, not gradient)");
console.log("4. Meta Pills: Use MetaPill component");
console.log("5. Sidebar: Reading Progress, Author (with image), Cyan CTA, Quick Links");
console.log("6. CTA Section: bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal");
console.log("7. Add subcomponents at the end before export");
console.log("\nCyan CTA Theme:");
console.log("- bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50");
console.log("- bg-cyan-500 for button, hover:bg-cyan-600");
console.log("- text-cyan-900 for title, text-cyan-800 for footer text");

