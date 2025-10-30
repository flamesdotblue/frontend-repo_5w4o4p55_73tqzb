import { Rocket, Shield, Languages, FileText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">PolyDocs</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 flex items-center gap-1"><Languages size={16}/>Translate</a>
          <a href="#convert" className="hover:text-slate-900 flex items-center gap-1"><FileText size={16}/>Convert</a>
          <a href="#privacy" className="hover:text-slate-900 flex items-center gap-1"><Shield size={16}/>Privacy</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#pricing" className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-sm hover:bg-slate-50">Pricing</a>
          <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800">Sign in</button>
        </div>
      </div>
    </header>
  );
}
