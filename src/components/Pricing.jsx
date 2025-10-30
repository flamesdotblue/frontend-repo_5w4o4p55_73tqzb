import { Check } from "lucide-react";

export default function Pricing() {
  const perksFree = [
    "Translate up to 15 pages",
    "Convert PDF to Word/PPT up to 10 pages",
    "Secure processing & auto-delete",
  ];
  const perksPro = [
    "Translate larger PDFs",
    "Convert large documents",
    "OCR for scanned PDFs",
    "Editing & image insertion",
    "Priority processing",
  ];

  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Simple, student-friendly pricing
          </h2>
          <p className="mt-2 text-slate-600">Start free. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
            <h3 className="text-slate-900 font-semibold">Free</h3>
            <p className="text-sm text-slate-600 mt-1">For quick tasks and small files</p>
            <div className="mt-4">
              <span className="text-3xl font-semibold">$0</span>
              <span className="text-slate-500 ml-1">forever</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {perksFree.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-700">
                  <Check size={16} className="mt-0.5 text-emerald-600" /> {p}
                </li>
              ))}
            </ul>
            <button className="mt-6 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
              Continue free
            </button>
          </div>

          <div className="relative rounded-2xl border border-violet-300 bg-white p-6 shadow-[0_0_0_4px_rgba(139,92,246,0.08)]">
            <div className="absolute -top-3 right-4 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white">
              Best value
            </div>
            <h3 className="text-slate-900 font-semibold">Premium</h3>
            <p className="text-sm text-slate-600 mt-1">For power users and big projects</p>
            <div className="mt-4">
              <span className="text-3xl font-semibold">$2.25</span>
              <span className="text-slate-500 ml-1">/month + taxes</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {perksPro.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-700">
                  <Check size={16} className="mt-0.5 text-violet-600" /> {p}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:opacity-95">
              Upgrade to Premium
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Cancel anytime. Pricing shown in USD for reference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
