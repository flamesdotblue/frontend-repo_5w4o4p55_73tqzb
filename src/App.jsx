import Navbar from "./components/Navbar";
import HeroUploader from "./components/HeroUploader";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroUploader />
        <Features />
        <div id="convert" className="max-w-6xl mx-auto px-4 -mt-6 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Free hosting & monetization tips</h3>
            <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Use free hosting like Vercel or Netlify for the website and Render or Deta for server APIs.</li>
              <li>Integrate a free translator like LibreTranslate via your backend to avoid exposing keys.</li>
              <li>Add Google AdSense once your domain is approved. Place responsive ads in non-intrusive areas.</li>
              <li>Delete files automatically after completion to protect privacy.</li>
            </ul>
          </div>
        </div>
        <Pricing />
      </main>
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600">
          <p className="font-medium">PolyDocs</p>
          <p className="mt-1">Built for students: simple, fast, and privacy-first.</p>
        </div>
      </footer>
    </div>
  );
}
